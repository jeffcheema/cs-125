import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
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

      <Button style={styles.login} title="Login" color="#1DA1F2" />
      <StatusBar style="auto" />
      <CreateCard />
    </View>
  );
}

const CreateCard = () => {
  return (
    <Card style={Styles.container}>
      <Card.Content>
        <Title>Geeks For Geeks</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png",
        }}
      />
      <Card.Content>
        <Paragraph>A Computer Science portal for Geeks</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button title="Add to Favourites"></Button>
      </Card.Actions>
    </Card>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
});

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
