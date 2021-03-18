import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
//ENV
import {REACT_NATIVE_PLACES_API_KEY} from '@env';

const RouteMap = () => {
  //Maps Direction Points
  const origin = {latitude: 28.450627, longitude: -16.263045};
  const destination = {latitude: 28.460127, longitude: -16.269045};
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={REACT_NATIVE_PLACES_API_KEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
      <Marker coordinate={origin} title="origin" />
      <Marker coordinate={destination} title="destination" />
    </MapView>
  );
};

export default RouteMap;
