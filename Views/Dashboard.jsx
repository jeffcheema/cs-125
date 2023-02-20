import React, { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import MovieCard from "../Components/MovieCard";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const config = {
      params: {
        n: 10,
      },
      headers: {
        client: "MOVI_162",
        "x-api-key": "Y38wpjAaP566ppQwom80J207PBbha4Da2neKmR5S",
        authorization: "Basic TU9WSV8xNjJfWFg6eDFjbndocWttVXFx",
        territory: "XX",
        "api-version": "v200",
        geolocation: "-22.0; 14.0",
        "device-datetime": new Date().toISOString(),
      },
    };
    axios
      .get("https://api-gate2.movieglu.com/filmsNowShowing", config)
      .then((response) => {
        if (response) {
          setMovies(response?.data?.films);
        }
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      {movies && (
        <FlatList
          data={movies}
          renderItem={({ index, item }) => {
            return (
              <MovieCard
                key={item.film_name}
                id={index}
                title={item.film_name}
                synopsis={item.synopsis_long}
              />
            );
          }}
          keyExtractor={(item) => item.index}
        />
      )}
    </SafeAreaView>
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
