import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  StatusBar,

} from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

// Redux
import { themes, actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  textColor: state.textColor,
  statusBarColor: state.statusBarColor,
  buttonColor: state.buttonColor,
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

  setPrimaryColor(index) {
    const { dispatch } = this.props
    dispatch(actionCreators.setPrimaryColor(index));
  }

  boxStyle(options) {
    return {
      width: 60,
      height: 60,
      padding: 25,
      margin: 5,
      borderRadius: 10,
      backgroundColor: options
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          backgroundColor={this.props.statusBarColor}
          barStyle="light-content"
        />
        <View style={styles.grid}>
          {themes.map((theme, index) => {
            return (
              <TouchableOpacity
                style={this.boxStyle(theme.defaultPrimaryColor)}
                key={index}
                onPress={this.setPrimaryColor.bind(this, index)}
              />
            );
          })}
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Tab2')}
          title="Go to Tab 2 >"
          color={this.props.buttonColor}
          style={styles.button}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 60,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20
  },
  button: {
    margin: 20
  }
});


export default connect(mapStateToProps)(Tab1)