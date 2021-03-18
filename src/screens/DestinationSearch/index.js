import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
//ENV
import {REACT_NATIVE_PLACES_API_KEY} from '@env';
//Component
import PlaceRow from './PlaceRow';

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
          enablePoweredByContainer={false}
          suppressDefaultStyles
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
