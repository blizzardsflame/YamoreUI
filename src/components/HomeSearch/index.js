import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
//Icons Imports
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Hooks
import {useNavigation} from '@react-navigation/native';

const HomeSearch = (props) => {
  const navigation = useNavigation();
  //Nav Function
  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };
  //End Nav Function
  return (
    <View style={styles.container}>
      {/*Input Box*/}
      <Pressable onPress={goToSearch} style={styles.inputBoxContainer}>
        <Text style={styles.inputBoxText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={18} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </View>
      </Pressable>
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
      {/*RewardBar*/}
      {/*<View style={styles.rewardBar}>
        <View style={styles.rewardBarPoints}>
          <MaterialCommunityIcons
            name="cards-diamond"
            size={24}
            color="#CF9B3F"
          />
          <Text style={styles.rewardBarText}>302 pts</Text>
        </View>
        <View style={styles.rewardBarHub}>
          <Text style={styles.rewardBarText}>Reward Hub</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#928E93"
          />
        </View>
      </View>*/}
      {/*End RewardBar*/}
    </View>
  );
};
export default HomeSearch;
