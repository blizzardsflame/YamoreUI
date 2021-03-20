import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15, marginBottom: 10}}>
        {/* User Row */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/*User Profile Image */}
          <View
            style={{
              backgroundColor: '#eee',
              width: 64,
              height: 64,
              borderRadius: 50,
              marginRight: 10,
            }}></View>
          {/* UserName */}
          <View>
            <Text style={{color: 'white', fontSize: 18}}>Redha Nedjari</Text>
            <Text style={{color: 'lightgrey', fontSize: 18}}>5.00 *</Text>
          </View>
        </View>
        {/* End User Row */}
        {/* Messages Row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#919191',
            paddingVertical: 10,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5, fontSize: 16}}>
              Messages
            </Text>
          </Pressable>
        </View>
        {/* End Messages Row */}
        {/* Do More */}
        <Pressable
          onPress={() => {
            console.warn('Do more with your account');
          }}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>
        {/* End Do More */}
        {/* Make Money */}
        <Pressable
          onPress={() => {
            console.warn('Make Money Driving');
          }}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
        {/* End Make Money */}
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
