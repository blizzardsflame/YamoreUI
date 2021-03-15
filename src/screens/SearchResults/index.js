import React from 'react';
import {View} from 'react-native';
//components
import HomeMap from '../../components/HomeMap/';
import UberTypes from '../../components/UberTypes/';

const SearchResults = (props) => {
  return (
    <View style={{display: 'flex'}}>
      <View style={{height: '50%'}}>
        <HomeMap />
      </View>
      <View style={{height: '50%'}}>
        <UberTypes />
      </View>
    </View>
  );
};
export default SearchResults;
