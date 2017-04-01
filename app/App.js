import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

// Theme
import Theme from './Theme'

// Pages
import Tab1 from './containers/Tab1'
import Tab2 from './containers/Tab2'
import Tab3 from './containers/Tab3'

// Tab navigation configuration
const TabNavTemplate = TabNavigator({
  Tab1: {
    screen: Tab1,
  },
  Tab2: {
    screen: Tab2,
  },
  Tab3: {
    screen: Tab3,
  },
}, {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
    swipeEnabled: true,
  });


AppRegistry.registerComponent('TabNavTemplate', () => TabNavTemplate);