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
import HomeSearch from './src/screens/DestinationSearch/';
//Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeSearch />
    </>
  );
};

export default App;
