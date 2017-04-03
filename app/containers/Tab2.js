import React from 'react';
import {
  Text,
  View,
  ScrollView,
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
      <ScrollView style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Tab3')}
          title="Go to Tab 3 >"
          color={this.props.buttonColor}
        />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis pretium mauris, eget ornare justo. Etiam nisi ipsum, dapibus vel ex vitae, placerat ultricies ipsum. Integer vehicula, nulla at luctus euismod, nulla urna cursus eros, et iaculis sapien ipsum a nibh. Donec luctus dapibus viverra. Donec non ipsum et odio porttitor interdum quis at tortor. Proin vel tellus orci. Nunc dapibus purus quis enim cursus, vel faucibus massa laoreet. Aenean maximus euismod pulvinar. Donec aliquet purus quis consequat iaculis. Duis consectetur dapibus nulla at sollicitudin. Curabitur sed lacus ut felis commodo ultrices. Quisque ac posuere libero. Praesent id ipsum a nisi rutrum rutrum sit amet ut nulla. Morbi commodo lobortis vehicula.
        </Text>
        <Text style={styles.text}>
          Fusce accumsan orci ut sagittis congue. Sed laoreet cursus nulla, non dignissim dui interdum sit amet. Aliquam pulvinar eu enim a eleifend. Nunc volutpat cursus urna, quis cursus nisi volutpat vel. Nam mattis rutrum metus, quis fringilla metus facilisis at. Fusce quis urna efficitur, facilisis odio scelerisque, tristique risus. In faucibus, turpis sollicitudin dapibus ornare, ipsum velit tincidunt ipsum, in hendrerit libero sapien non turpis.
        </Text>
        <Text style={styles.text}>
          Mauris ullamcorper ligula vel massa scelerisque, vitae semper orci congue. Aliquam neque diam, aliquet ac ultrices non, placerat ut nisl. In ullamcorper, ante ut aliquam auctor, tortor nisi imperdiet augue, eget tempus quam sem eget lectus. Aliquam gravida sapien nisl, et consequat mi imperdiet sit amet. Sed ut tortor maximus, euismod ligula ac, commodo dui. Fusce leo quam, volutpat vitae nulla nec, varius scelerisque tellus. Nam sed ultricies ipsum, aliquam pulvinar dui. Maecenas euismod nisl sit amet lectus porttitor finibus. Aliquam vehicula convallis orci ac congue. Pellentesque maximus augue a justo tempor congue. Etiam porttitor lobortis magna eu congue.
        </Text>
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
  },
  text: {
    textAlign:'justify',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,

  }
});

export default connect(mapStateToProps)(Tab2)