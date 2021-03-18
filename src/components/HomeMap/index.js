import React from 'react';
import {Image, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
//Data
import cars from '../../assets/data/cars';

const HomeMap = (props) => {
  //Get Images
  const getImage = (type) => {
    if (type === 'UberX') {
      return require(`../../assets/images/top-UberX.png`);
    }
    if (type === 'Comfort') {
      return require(`../../assets/images/top-Comfort.png`);
    }

    return require(`../../assets/images/top-UberXL.png`);
  };

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
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 32,
              height: 32,
              resizeMode: 'contain',
              transform: [{rotate: `${car.heading}deg`}],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};
export default HomeMap;
