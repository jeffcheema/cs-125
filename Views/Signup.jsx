import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useAuth } from "../Providers/AuthProvider";
import MovieForm from "./MovieForm"

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showMovieForm, setShowMovieForm] = useState(0);
  const { signUp: signUpCallback } = useAuth();

  const changeScreens = () => {
    setShowMovieForm(1)
  }

  return (
    <>
    {showMovieForm == 0 && (
      <View style={styles.container} styler>
      <Text style={styles.header}>
        <Text style={styles.blue}>MOVIE</Text>MATCHR SIGN UP
      </Text>
      <Text style={styles.label}>
        Full<Text style={styles.blue}>Name</Text>
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Bob Ross"
      />
      <Text style={styles.label}>
        User<Text style={styles.blue}>name</Text>
      </Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Bob Ross"
      />

      <Text style={styles.label}>
        Pass<Text style={styles.blue}>word</Text>
      </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Text style={styles.label}>
        Confirm <Text style={styles.blue}>Password</Text>
      </Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Password"
      />
      <Text style={styles.error}>{error}</Text>
      <Button
        style={styles.signup}
        title="signup"
        color="#1DA1F2"
        onPress={changeScreens}
      />
      <StatusBar style="auto" />
    </View>
    )}
    {showMovieForm == 1 && (
      <MovieForm 
        username = {username}
        password = {password}
        confirmPassword = {confirmPassword}
      />
    )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  blue: {
    color: "#1DA1F2",
  },
  error: {
    color: "red",
  },
  label: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    width: "70%",
    padding: 10,
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  signup: {
    backgroundColor: "#1DA1F2",
    borderWidth: 1,
  },
});
