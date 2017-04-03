import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  textColor: state.textColor,
  buttonColor: state.buttonColor,
})

class Tab2 extends React.Component {
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
          color={this.props.buttonColor}
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

export default connect(mapStateToProps)(Tab2)