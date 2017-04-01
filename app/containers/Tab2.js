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

export default class Tab2 extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Tab 2',
      icon: ({ tintColor }) => (
        <Icon name="ios-baseball-outline" size={20} style={[{ color: tintColor }]} />
      ),
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Tab3')}
          title="Go to Tab 3 >"
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