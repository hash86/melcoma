import React, {Component} from 'react';
import {ScrollView, View, Text, Image, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';

import HomeP from './Screens/Home';
import DemandP from './Screens/Home';
import DetailP from './Screens/Home';
import AboutP from './Screens/Home';
import NewEstateP from './Screens/NewEstate';
import MelcomamP from './Screens/NewEstate';
import {YellowBox} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

const {width} = Dimensions.get('window');

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeP,
      navigationOptions: {
        tabBarLabel: 'آخرین املاک',
        tabBarIcon: ({tintColor}) => (
          // <Image
          //   source={require('../assets/icons/melcom.png')}
          //   style={{width: 25, height: 25,tintColor="black"}}></Image>
          <FontAwesome5 name="list" size={18} style={{color: tintColor}} />
        ),
      },
    },
    Demand: {
      screen: DemandP,
      navigationOptions: {
        tabBarLabel: 'آخرین تقاضا',
        tabBarIcon: ({tintColor}) => (
          // <Image
          //   source={require('../assets/icons/melcom.png')}
          //   style={{width: 25, height: 25,tintColor="black"}}></Image>
          <FontAwesome5 name="list" size={18} style={{color: tintColor}} />
        ),
      },
    },
    NewEstate: {
      screen: NewEstateP,
      navigationOptions: {
        tabBarLabel: 'سپردن',
        tabBarIcon: ({tintColor}) => (
          // <Image
          //   source={require('../assets/icons/melcom.png')}
          //   style={{width: 25, height: 25,tintColor="black"}}></Image>
          <FontAwesome5 name="plus" size={25} style={{color: tintColor}} />
        ),
      },
    },
    About: {
      screen: AboutP,
      navigationOptions: {
        tabBarLabel: 'درباره ',
        tabBarIcon: ({tintColor}) => (
          // <Image
          //   source={require('../assets/icons/melcom.png')}
          //   style={{width: 25, height: 25,tintColor="black"}}></Image>
          <FontAwesome5 name="question" size={18} style={{color: tintColor}} />
        ),
      },
    },
    Melcomam: {
      screen: MelcomamP,
      navigationOptions: {
        tabBarLabel: 'ملکامم ',
        tabBarIcon: ({tintColor}) => (
          // <Image
          //   source={require('../assets/icons/melcom.png')}
          //   style={{width: 25, height: 25,tintColor="black"}}></Image>
          <FontAwesome5 name="user" size={18} style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'Iranian Sans',
        fontSize: 10,
      },
    },
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {headerTitle: routeName};
    },
  },
);

//Top Navigator Not using yet
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

customDrawerComponent = props => (
  <View style={{flex: 1}}>
    <View
      style={{
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/icons/melcom.png')}
        style={{height: 120, width: 150}}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);
// Left Menu

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeTabNavigator,
    },
    About: AboutP,
    NewEstate: NewEstateP,
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      activeTintColor: 'blue',
    },
    drawerPosition: 'right',
    drawerWidth: width,
  },
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: AppDrawerNavigator,
      navigationOptions: {
        drawerLabel: 'خانه',
        title: 'خانه',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('../assets/icons/melcom.png')}
            resizeMode="contain"
            style={{width: 20, height: 20, tintColor: tintColor}}
          />
        ),
      },
    },
    NewEstate: NewEstateP,
    NewEstate: NewEstateP,
  },
  {initialRouteName: 'Home'},
);

const AppContainer = createAppContainer(AppSwitchNavigator);
