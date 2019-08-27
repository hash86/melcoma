import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Icon} from 'native-base';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import HomeP from './Screens/Home';
import DetailP from './Screens/Home';
import AboutP from './Screens/Home';
import NewEstateP from './Screens/NewEstate';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeP,
    },
    About: AboutP,
    NewEstate: NewEstateP,
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {headerTitle: routeName};
    },
  },
);

const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: HomeTabNavigator,
    About: AboutP,
    NewEstate: NewEstateP,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <Icon name="menu" size={20} onPress={() => navigation.openDrawer()} />
        ),
      };
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator,
    About: AboutP,
    NewEstate: NewEstateP,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Home: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      drawerLabel: 'خانه',
      drawerIcon: ({tintColor}) => (
        <Image
          source={require('../assets/icons/melcom.png')}
          resizeMode="contain"
          style={{width: 20, height: 20, tintColor: tintColor}}
        />
      ),
    },
  },
  Details: DetailP,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({});
