import React from 'react';
import {Text, View} from 'react-native';
//Components
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View style={{display: 'flex'}}>
      {/*HomeMap*/}
      <View style={{height: '50%'}}>
        <HomeMap />
      </View>
      {/*End HomeMap*/}
      <View style={{height: '36%'}}>
        {/*Covid  Message*/}
        <CovidMessage />
        {/*End Covid  Message*/}

        {/*Bottom Component*/}
        <HomeSearch />
        {/*End Bottom Component*/}
      </View>
    </View>
  );
};

export default HomeScreen;
