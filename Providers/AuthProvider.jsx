import React, { useContext, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

//firebase config

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("currentUser");
      if (user) {
        setCurrentUser(JSON.parse(user));
      }
      setLoading(false);
    };
    getUser();
  }, []);

  let login = async ({ username, password }) => {
    const lookup = await AsyncStorage.getItem(username);
    if (lookup) {
      let user = JSON.parse(lookup);

      if (user.password === password) {
        setCurrentUser(user);
      } else {
        throw new Error("Incorrect password");
        return;
      }
    } else {
      throw new Error("Username does not exist");
      return;
    }
  };

  let signUp = async ({
    name,
    username,
    password,
    confirmPassword,
    moviePreferences,
  }) => {
    // check if the username is already in sync storage
    if (username === "" || password === "" || name === "") {
      throw new Error("All fields are required");
    } else if (await AsyncStorage.getItem(username)) {
      throw new Error("Username already exists");
    } else if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    } else if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    // add the name, username, and password to sync storage

    await AsyncStorage.setItem(
      username,
      JSON.stringify({ name, username, password, moviePreferences })
    );
    await login({ username, password });
    return true;
  };

  let logout = async () => {
    setCurrentUser(null);
  };

  useEffect(() => {}, []);

  const value = {
    currentUser,
    login,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
