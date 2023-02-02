import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Zipcode = () => {
  const [zipCode, setZipCode] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        setZipCode(data.address.postcode);
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return ({zipCode});
};

export default Zipcode;
