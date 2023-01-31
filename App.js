import React, { useState } from "react";

import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthProvider } from "./Providers/AuthProvider";

import Navigation from "./Navigation";

export default function App() {
  // create tab navigator
  const Tab = createBottomTabNavigator();

  return (
    // initialize tab navigator
    <AuthProvider>
      <Navigation />
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
