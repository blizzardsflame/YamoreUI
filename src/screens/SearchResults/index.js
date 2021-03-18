import React from 'react';
import {View} from 'react-native';
//components
import RouteMap from '../../components/RouteMap/';
import UberTypes from '../../components/UberTypes/';

const SearchResults = (props) => {
  return (
    <View style={{display: 'flex'}}>
      <View style={{height: '50%'}}>
        <RouteMap />
      </View>
      <View style={{height: '50%'}}>
        <UberTypes />
      </View>
    </View>
  );
};
export default SearchResults;
