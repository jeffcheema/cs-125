import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import tab navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Views/Login";
import SignUp from "./Views/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./Providers/AuthProvider";

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
