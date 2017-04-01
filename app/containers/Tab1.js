import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import Theme from './../Theme'

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  
})

class Tab1 extends React.Component {

  static navigationOptions = {
    tabBar: {
      label: 'Tab 1',
      icon: ({ tintColor }) => (
        <Icon name="ios-basketball-outline" size={20} style={[{ color: tintColor }]} />
      ),
    },
  }

  setPrimaryColor(color) {
    const { dispatch } = this.props
    dispatch(actionCreators.setPrimaryColor(color));
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={Theme.statusBarColor}
          barStyle="light-content"
        />
        <Button
          onPress={this.setPrimaryColor.bind(this, 'steelblue')}
          title="steelblue"
          color={Theme.buttonColor}
        />
        <Button
          onPress={this.setPrimaryColor.bind(this, 'tomato')}
          title="tomato"
          color={Theme.buttonColor}
        />
        <Button
          onPress={this.setPrimaryColor.bind(this, 'lightseagreen')}
          title="lightseagreen"
          color={Theme.buttonColor}
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


export default connect(mapStateToProps)(Tab1)