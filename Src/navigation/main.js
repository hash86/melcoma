import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {Icon} from 'native-base';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';

import HomeP from 'MelcomA/src/screens/home';
import HelpP from 'MelcomA/src/screens/help';
import EstateP from 'MelcomA/src/screens/estate';
import AuthP from 'MelcomA/src/screens/auth';
import favoriteEstatesP from 'MelcomA/src/screens/help';
import UserHomeP from 'MelcomA/src/screens/userHome';
import ConfigP from 'MelcomA/src/screens/help';
import NewEstateP from 'MelcomA/src/screens/newEstate';
import SearchP from 'MelcomA/src/screens/search';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DEVICE_WIDTH} from 'MelcomA/src/constants/layout';

const HomeStack = createStackNavigator(
  {
    Home: HomeP,
    Estate: EstateP,
    Search: SearchP,
  },
  {
    defaultNavigationOptions: {
      header: false,
    },
  },
);

const NewEstateStack = createStackNavigator(
  {
    NewEstate: NewEstateP,
  },
  {
    defaultNavigationOptions: {
      header: false,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Auth: {
      screen: AuthP,
    },
    UserHome: UserHomeP,
    Config: ConfigP,
    favoriteEstates: favoriteEstatesP,
  },
  {
    defaultNavigationOptions: {
      header: false,
    },
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
const MainTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'آخرین املاک',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome5 name="list" size={18} style={{color: tintColor}} />
        ),
      },
    },

    NewEstate: {
      screen: NewEstateStack,
      navigationOptions: {
        tabBarLabel: 'سپردن',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome5 name="plus" size={25} style={{color: tintColor}} />
        ),
      },
    },

    Help: {
      screen: HelpP,
      navigationOptions: {
        tabBarLabel: 'درباره ',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome5 name="question" size={18} style={{color: tintColor}} />
        ),
      },
    },
    Auth: {
      screen: AuthStack,
      navigationOptions: {
        tabBarLabel: 'ملکامم ',
        tabBarIcon: ({tintColor}) => (
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
// const HomeStackNavigator = createStackNavigator(
//   {
//     MainTabNavigator: MainTabNavigator,
//     Auth: AuthP,
//     NewEstate: NewEstateP,
//   },
//   {
//     defaultNavigationOptions: ({navigation}) => {
//       return {
//         headerRight: (
//           <Icon name="menu" size={20} onPress={() => navigation.openDrawer()} />
//         ),
//       };
//     },
//   },
// );

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
        source={require('MelcomA/assets/icons/melcom.png')}
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
      screen: MainTabNavigator,
    },
    Help: HelpP,
    Auth: AuthP,
    NewEstate: NewEstateP,
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      activeTintColor: 'blue',
    },
    drawerPosition: 'right',
    drawerWidth: DEVICE_WIDTH * 0.8,
  },
);

// const AppSwitchNavigator = createSwitchNavigator(
//   {
//     Home: {
//       screen: AppDrawerNavigator,
//       navigationOptions: {
//         drawerLabel: 'خانه',
//         title: 'خانه',
//         drawerIcon: ({tintColor}) => (
//           <Image
//             // source={require('MelcomA/assets/icons/melcom.png')}
//             resizeMode="contain"
//             style={{width: 20, height: 20, tintColor}}
//           />
//         ),
//       },
//     },
//     NewEstate: NewEstateP,
//   },
//   {initialRouteName: 'Home'},
// );

export default createAppContainer(AppDrawerNavigator);
