import { createStackNavigator } from 'react-navigation-stack';
import React, {Component} from 'react';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppNavigator = createStackNavigator({
  Map: {
    screen: MapScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
},{
  initialRouteName: 'Map',
  defaultNavigationOptions: {
    header: null,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  },
});

export default AppNavigator;