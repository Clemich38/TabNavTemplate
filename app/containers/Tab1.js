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


export default class Tab1 extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Tab1',
      icon: ({ tintColor }) => (
        <Icon name="ios-basketball-outline" size={20} style={[{ color: tintColor }]} />
      ),
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Tab2')}
        title="Go to Tab2"
      />
    );
  }
}

const styles = StyleSheet.create({
  
});