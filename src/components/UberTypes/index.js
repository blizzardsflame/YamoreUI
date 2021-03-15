import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from './styles';
//Compoenents
import UberTypesItems from '../UberTypesItems';
//Data
import typesData from '../../assets/data/types';

export const UberTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map((type) => (
        <UberTypesItems type={type} key={type.id} />
      ))}
      <Pressable onPress={confirm} style={styles.confirmRide}>
        <Text style={styles.confirmRideText}>Confirm Your Ride</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
