import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
//Icons Imports
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = (props) => {
  return (
    <View style={styles.container}>
      {/*Input Box*/}
      <View style={styles.inputBoxContainer}>
        <Text style={styles.inputBoxText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={18} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </View>
      </View>
      {/*End Input Box*/}
      {/*Previous Destination*/}
      <View style={styles.row}>
        <View style={styles.iconContainerRecent}>
          <AntDesign name="clockcircle" size={18} color="white" />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
      {/*End Previous Destination*/}
      {/*Home Destination*/}
      <View style={styles.row}>
        <View style={styles.iconContainerHome}>
          <Entypo name="home" size={18} color="white" />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
      {/*End Home Destination*/}
    </View>
  );
};
export default HomeSearch;
