import React from 'react';
import {View} from 'react-native';
//components
import RouteMap from '../../components/RouteMap/';
import UberTypes from '../../components/UberTypes/';
//Hooks
import {useRoute} from '@react-navigation/native';

const SearchResults = (props) => {
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex'}}>
      <View style={{height: '50%'}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{height: '40%'}}>
        <UberTypes />
      </View>
    </View>
  );
};
export default SearchResults;
