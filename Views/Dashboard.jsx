import React, { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import MovieCard from "../Components/MovieCard";
import genreList from '../genreList';

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  // const getGenres = async (title) => {
    
  //   const queryURL = `https://api.themoviedb.org/3/search/movie?api_key=787aa7caa3041935938721201617c6e7&language=en-US&query=${encodeURIComponent(title)}&page=1&include_adult=false`
  //   console.log('getGenres was called with ' + title);
  //   axios
  //     .get(queryURL)
  //     .then((response) => {
  //       if (response) {
  //         console.log('RESPONSE:');
  //         console.log(response.data.results[0].genre_ids.map(g => genreList[g]));
  //       }
  //     });
  // };

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
          // console.log(response?.data?.films);
          setMovies(response?.data?.films);
        }
      });
  };

  useEffect(() => {
    getMovies();
    // const movieGenres = movies.map(movie => getGenres(movie.film_name));
    // console.log('================================================================');
    // console.log('movie genres:');
    // console.log(movieGenres);
    console.log('movies: =========================');
    console.log(movies);
    // movieGenres = movies.map(m => m.film_name);
    // console.log(' genres @ 3:46pm: ===========================');
    // console.log(movieGenres);
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
