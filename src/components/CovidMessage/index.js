import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import RightArrow from 'react-native-vector-icons/Feather';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quibusdam
        aspernatur nobis unde! Quibusdam facere dolorem rem, distinctio eligendi
        voluptatem.
      </Text>
      <View style={styles.learnMoreWrapper}>
        <Text style={styles.learnMore}>Learn More</Text>
        <RightArrow
          name="arrow-right"
          size={24}
          color="#bed9ff"
          style={styles.learnMoreIcon}
        />
      </View>
    </View>
  );
};
export default CovidMessage;
