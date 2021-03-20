import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
//ENV
import {REACT_NATIVE_PLACES_API_KEY} from '@env';

const RouteMap = ({origin, destination}) => {
  //Maps Direction Points
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={REACT_NATIVE_PLACES_API_KEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
      <Marker coordinate={originLoc} title="origin" />
      <Marker coordinate={destinationLoc} title="destination" />
    </MapView>
  );
};

export default RouteMap;
