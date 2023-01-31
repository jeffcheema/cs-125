import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // create tab navigator
  const Tab = createBottomTabNavigator();

  return (
    // initialize tab navigator
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 200,
    position: "absolute",
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
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    backgroundColor: "#1DA1F2",
  },
});
