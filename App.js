import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}><Text style={styles.blue}>MOVIE</Text>MATCHR</Text>

      <Text style={styles.label}>User<Text style={styles.blue}>name</Text></Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Bob Ross" />

      <Text style={styles.label}>Pass<Text style={styles.blue}>word</Text></Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" />

      <Button style={styles.login} title="Login" color="#1DA1F2" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 200,
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
  },
  blue: {
    color: '#1DA1F2',
  },
  label: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    width: '70%',
    padding: 10,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    backgroundColor: '#1DA1F2',
  }
});
