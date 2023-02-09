import React, { useState, useEffect } from "react";
import axios from 'axios';
import { StyleSheet, View, Text } from "react-native";
import CreateCard from "../Components/Card";

const Dashboard = () => {
  [movies, setMovies] = useState([]);

  const getMovies = async () => {

    // console.log('')

    const config = {
      params: {
        n: 2
      },
      headers: {
        'client': 'MOVI_162',
        'x-api-key': 'Y38wpjAaP566ppQwom80J207PBbha4Da2neKmR5S',
        'authorization': 'Basic TU9WSV8xNjJfWFg6eDFjbndocWttVXFx',
        'territory': 'XX',
        'api-version': 'v200',
        'geolocation': '-22.0; 14.0',
        'device-datetime': (new Date()).toISOString()
      }
    }
    console.log("Line 27");
    axios.get('https://api-gate2.movieglu.com/filmsNowShowing', config).then((response) => {
      if (response) {
        console.log(response?.data?.films);
        setMovies(response?.data?.films);
      } 
    
    });
  };

  useEffect(() => {
    return () => {
      const movies = getMovies();
      
    }
  }, []);

  return (
    <View style={styles.container} styler>
      {/* <CreateCard /> */}
      {movies?.map(({film_name}, index)=>{
       <>
       <Text>Movie #{index}</Text>
       <Text>{film_name}</Text>

       </>
       

      })}
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
