/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
// Components
import HomeScreen from './src/screens/HomeScreen/';
import DestinationSearch from './src/screens/DestinationSearch/';
import SearchResults from './src/screens/SearchResults/';
//Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
