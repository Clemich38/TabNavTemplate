import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { TabNavigator, StackNavigator } from 'react-navigation';


// Pages
import Tab1 from './containers/Tab1'
import Tab2 from './containers/Tab2'
import Tab3 from './containers/Tab3'

// Redux
import { actionCreators } from './redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  activeTabTintColor: state.activeTabTintColor,
  statusBarColor: state.statusBarColor,
  tabBackgroundColor: state.tabBackgroundColor,
  tabTitleColor: state.tabTitleColor,
  buttonColor: state.buttonColor,
  textColor: state.textColor
})


class App extends React.Component {

  mainNav = this.refresh();

  refresh () {
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
          activeBackgroundColor: this.props.tabBackgroundColor,
          inactiveBackgroundColor: this.props.tabBackgroundColor,
          activeTintColor: this.props.activeTabTintColor,
          inactiveTintColor: this.props.tabTitleColor,
          style: { backgroundColor: this.props.tabBackgroundColor },
          indicatorStyle: { backgroundColor: this.props.activeTabTintColor },
        },
        swipeEnabled: true,
      });

    return StackNavigator({
      Home: {
        screen: TabNavTemplate,
        navigationOptions: {
          title: 'Tab Nav Template',
          header: {
            titleStyle: {
              color: this.props.activeTabTintColor
            },
            tintColor: this.props.activeTabTintColor,
            style: {
              elevation: 0,
              backgroundColor: this.props.tabBackgroundColor
            }
          },
        },
      },
    });
  }

  render() {
    this.mainNav = this.refresh();
    return (
      <this.mainNav  />
    );
  }
}

export default connect(mapStateToProps)(App)
