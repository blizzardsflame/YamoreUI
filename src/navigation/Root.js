import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Components
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

//Creating StackNavigator
const Stack = createStackNavigator();

const Root = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'HomeScreen'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
        />
        <Stack.Screen name={'SearchResults'} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
