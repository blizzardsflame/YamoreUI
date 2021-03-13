import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
//ENV
import {REACT_NATIVE_PLACES_API_KEY} from '@env';

const DestinationSearch = (props) => {
  //State
  const [originePlace, setOriginePlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originePlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originePlace, destinationPlace]);

  //Return
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginePlace({data, details});
          }}
          query={{
            key: REACT_NATIVE_PLACES_API_KEY,
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
          }}
          query={{
            key: REACT_NATIVE_PLACES_API_KEY,
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default DestinationSearch;
