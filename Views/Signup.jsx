import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container} styler>
      <Text style={styles.header}>
        <Text style={styles.blue}>MOVIE</Text>MATCHR
      </Text>

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

      <Button style={styles.signup} title="signup" color="#1DA1F2" />
      <StatusBar style="auto" />
    </View>
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
  },
});
