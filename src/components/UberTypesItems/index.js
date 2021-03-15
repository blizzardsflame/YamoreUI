import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypesItems = (props) => {
  const {type} = props;

  //Get Images
  const getImage = () => {
    if (type.type === 'UberX') {
      return require(`../../assets/images/UberX.jpeg`);
    }
    if (type.type === 'Comfort') {
      return require(`../../assets/images/Comfort.jpeg`);
    }

    return require(`../../assets/images/UberXL.jpeg`);
  };

  return (
    <View style={styles.container}>
      {/*Image*/}
      <Image style={styles.image} source={getImage()} />
      {/*End Image*/}

      {/*Middle Container */}
      <View style={styles.middleContianer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name="person" size={16} />3
        </Text>
        <Text style={styles.time}>8:03 PM drop off</Text>
      </View>
      {/*End Middle Container*/}

      {/*Right Contianer*/}
      <View style={styles.rightContianer}>
        <Ionicons name="pricetag" size={18} color="#42d742" />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
      {/*End Right Contianer*/}
    </View>
  );
};

export default UberTypesItems;
