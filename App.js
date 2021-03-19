/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
// Components
import HomeScreen from './src/screens/HomeScreen/';
import DestinationSearch from './src/screens/DestinationSearch/';
import SearchResults from './src/screens/SearchResults/';
//Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Depricated && Backward compatibility
navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {
  {
    /*Android Permissions */
  }
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Yamore Location Permission',
          message:
            'Yamore needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  {
    /*Main App*/
  }
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
