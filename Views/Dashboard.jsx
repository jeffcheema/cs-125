import React, { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import MovieCard from "../Components/MovieCard";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  const getGenres = async (id) => {
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/title/get-genres",
      params: { tconst: "tt0944947" },
      headers: {
        "X-RapidAPI-Key": "c58c0e4283msh9ac479d0cdc4813p130dbbjsnf15e2636ad12",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log('getGenres() called and the RapidAPI response is:');
        // console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const filterByWeather = async () => {
    temperature = await axios.get("http://api.weatherapi.com/v1", {
      key: "7c0d315f79674727806182811231103",
      q: 92617,
    });

    movies.filter((movie) => {
      if (temperature > 60) {
        if (
          !currentUser.weatherPreference &&
          (movie.rating !== "PG-13" || movie.rating !== "R")
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (
          currentUser.weatherPreference &&
          (movie.rating === "PG-13" || movie.rating === "R")
        ) {
          return true;
        } else {
          return false;
        }
      }
    });
    console.log("movies after weather filtering:");
    console.log(movies);
  };

  const filterByGenre = () => {};

  const getMovies = async () => {
    const config = {
      params: {
        n: 100,
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
      {movies && (
        <FlatList
          data={movies.slice(0, 3)}
          renderItem={({ index, item }) => {
            return (
              <MovieCard
                key={item.film_name}
                id={index}
                title={item.film_name}
                synopsis={item.synopsis_long}
                image={item.images?.still[1].medium.film_image}
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
