import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
  );
};
const Root = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Your Tips">
          {() => <DummyScreen name="Your Tips" />}
        </Drawer.Screen>
        <Drawer.Screen name="Help">
          {() => <DummyScreen name="Help" />}
        </Drawer.Screen>
        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name="Wallet" />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
          {() => <DummyScreen name="Settings" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Root;
