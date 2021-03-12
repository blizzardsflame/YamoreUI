import React from 'react';
import {Text, View} from 'react-native';
//Components
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      {/*Covid  Message*/}
      <HomeMap />
      {/*End HomeMap*/}
      {/*Covid  Message*/}
      <CovidMessage />
      {/*End Covid  Message*/}

      {/*Bottom Component*/}
      <HomeSearch />
      {/*End Bottom Component*/}
    </View>
  );
};

export default HomeScreen;
