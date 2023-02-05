import React, { useState, useEffect } from "react";
import axios from 'axios';
import { StyleSheet, View, Text } from "react-native";
import CreateCard from "../Components/Card";

const Dashboard = () => {
  [movies, setMovies] = useState([]);

  const getMovies = async () => {

    // console.log('')

    const config = {
      headers: {
        'client': 'MOVI_162',
        'x-api-key': 'Y38wpjAaP566ppQwom80J207PBbha4Da2neKmR5S',
        'authorization': 'Basic TU9WSV8xNjJfWFg6eDFjbndocWttVXFx',
        'territory': 'XX',
        'api-version': 'v200',
        'geolocation': '-22.0; 14.0',
        'device-datetime': '2023-02-04T07:11:53.637Z'
      }
    }

    axios.get('https://api-gate2.movieglu.com/filmsNowShowing/?n=5', config).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    const movies = getMovies();
    console.log(movies);
  }, []);

  return (
    <View style={styles.container} styler>
      <CreateCard />
      <Text>{movies}</Text>
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
