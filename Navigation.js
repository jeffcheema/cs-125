import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Login from "./Views/Login";
import SignUp from "./Views/Signup";
import Dashboard from "./Views/Dashboard";
import { useAuth } from "./Providers/AuthProvider";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const { currentUser } = useAuth();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {!currentUser && <Tab.Screen name="Login" component={Login} />}
        {!currentUser && <Tab.Screen name="SignUp" component={SignUp} />}
        {currentUser && <Tab.Screen name="Dashboard" component={Dashboard} />}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
