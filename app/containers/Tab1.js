import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import Theme from './../Theme'


export default class Tab1 extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Tab 1',
      icon: ({ tintColor }) => (
        <Icon name="ios-basketball-outline" size={20} style={[{ color: tintColor }]} />
      ),
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={Theme.statusBarColor}
          barStyle="light-content"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Tab2')}
          title="Go to Tab 2 >"
          color={Theme.buttonColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 25,
    paddingRight: 25,
  },
});