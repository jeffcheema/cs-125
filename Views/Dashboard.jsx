import React from "react";
import { StyleSheet, View } from "react-native";
import CreateCard from "../Components/Card";

const Dashboard = () => {
  return (
    <View style={styles.container} styler>
      <CreateCard />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Dashboard;
