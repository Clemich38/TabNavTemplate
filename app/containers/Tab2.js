import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';

// Theme
import Theme from './../Theme'


export default class Tab2 extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Tab2',
      /*icon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),*/
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Tab3')}
        title="Go to Tab3"
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