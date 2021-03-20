import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
//ENV
import {REACT_NATIVE_PLACES_API_KEY} from '@env';
//Component
import PlaceRow from './PlaceRow';
//Hooks
import {useNavigation} from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};

const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const DestinationSearch = (props) => {
  const navigation = useNavigation();
  //State
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {originPlace, destinationPlace});
    }
  }, [originPlace, destinationPlace]);

  //Return
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({data, details});
          }}
          fetchDetails
          query={{
            key: REACT_NATIVE_PLACES_API_KEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 0,
              left: 10,
              right: 10,
            },
            listView: styles.listView,
            separator: styles.separator,
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
          }}
          fetchDetails
          query={{
            key: REACT_NATIVE_PLACES_API_KEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 60,
              left: 10,
              right: 10,
            },
            separator: styles.separator,
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        {/*Small Side bar*/}
        <View>
          {/*Circle*/}
          <View style={styles.circle}></View>
          {/*Line*/}
          <View style={styles.line}></View>
          {/*Square*/}
          <View style={styles.square}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DestinationSearch;
