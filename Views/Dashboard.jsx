import React, { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import MovieCard from "../Components/MovieCard";
import zipcode from '../utils/Zipcode';

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
      q: zipcode,
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

  const sortByGenre = () => {
    const genreList = movies.map(movie => getGenres(movie.imdb_title_id));
    const overlappingCount = genreList.map(genres => {
      const gSet = new Set(genres);
      const userPreferences = new Set(currentUser.preferredGenres);
      const intersect = new Set([...gSet].filter(i => userPreferences.has(i)));
      return intersect.length;
    });
    movies.sort((a, b) => intersect.indexOf(b) - intersect.indexOf(a));
  };

  const getMovies = async () => {
    const config = {
      params: {
        n: 50,
      },
      headers: {
        client: "MOVI_162",
        "x-api-key": "mAVMfqzWZs7Wv7Mp1w52I3421mWUdXUR7gwDtTJa",
        authorization: "Basic TU9WSV8xNjI6bjlkWU9JS0dpSGtP",
        territory: "US",
        "api-version": "v200",
        geolocation: "40.71; 74.01",
        "device-datetime": new Date().toISOString(),
      },
    };
    axios
      .get("https://api-gate2.movieglu.com/filmsNowShowing", config)
      .then((response) => {
        if (response) {
          const filteredResponse = response.data.films.slice(3,6);
          console.log(filteredResponse);
          setMovies(filteredResponse);
        }
      });
  };

  useEffect(() => {
    getMovies();
    filterByWeather();
    sortByGenre();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {movies && (
        <FlatList
          data={movies}
          renderItem={({ index, item }) => {
            return (
              <MovieCard
                key={Math.random()}
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
  titleText: {
    padding: 30,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Dashboard;
