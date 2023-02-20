import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useAuth } from "../Providers/AuthProvider";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, login } = useAuth();
  const handleLogin = async () => {
    await login({ username, password });
  };
  return (
    <View style={styles.container} styler>
      {/* <Text>{currentUser?.username || "Not logged in"}</Text> */}
      <View style={styles.loginContainer}>
        <Text style={styles.header}>
          <View style={styles.inputLabel}>
            <Text style={styles.label}>MOVIE</Text>
            <Text style={styles.blue}>MATCHR</Text>
          </View>
        </Text>
        <View style={styles.inputLabel}>
          <Text style={styles.label}>User</Text>
          <Text style={styles.blue}>name</Text>
        </View>

        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Bob Ross"
        />

        <View style={styles.inputLabel}>
          <Text style={styles.label}>Pass</Text>
          <Text style={styles.blue}>word</Text>
        </View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          type="password"
          secureTextEntry={true}
        />

        <Button
          style={styles.login}
          title="Login"
          color="#1DA1F2"
          onPress={handleLogin}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    width: "70%",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  blue: {
    color: "#1DA1F2",
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    // border radius
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    backgroundColor: "#1DA1F2",
  },
  inputLabel: {
    flexDirection: "row",
    width: "100%",
    // align to flex-start
    alignItems: "flex-start",

    paddingBottom: 10,

    paddingBottom: 10,
  },
});
