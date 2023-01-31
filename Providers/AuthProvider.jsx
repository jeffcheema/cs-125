import React, { useContext, useState, useEffect } from "react";

//firebase config

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const userInformation = {
    name: "Bob Ross",
    email: "bobross@gmail.com",
    username: "bobross",
    password: "password",
  };
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  let login = async ({ username, password }) => {
    if (
      username === userInformation.username &&
      password === userInformation.password
    ) {
      setCurrentUser(userInformation);
    }
  };

  let logout = async () => {
    setCurrentUser(null);
  };

  useEffect(() => {}, []);

  const value = {
    currentUser,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
