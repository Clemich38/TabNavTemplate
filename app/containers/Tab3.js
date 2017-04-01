import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import Theme from './../Theme'


export default class Tab3 extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Tab3',
      icon: ({ tintColor }) => (
        <Icon name="ios-boat-outline" size={20} style={[{ color: tintColor }]} />
      ),
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Tab1')}
        title="Go to Tab1"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});