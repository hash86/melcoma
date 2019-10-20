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

import SplashP from 'MelcomA/src/screens/splash';
import HomeP from 'MelcomA/src/screens/home';
import HelpP from 'MelcomA/src/screens/help';
import EstateP from 'MelcomA/src/screens/estate';
import AuthP from 'MelcomA/src/screens/auth';
import favoriteEstatesP from 'MelcomA/src/screens/help';
import UserHomeP from 'MelcomA/src/screens/userHome';
import UserProfileP from 'MelcomA/src/screens/profile';
import NewEstateP from 'MelcomA/src/screens/newEstate';
import SearchP from 'MelcomA/src/screens/search';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {DEVICE_WIDTH} from 'MelcomA/src/constants/layout';
import TabBarIcon from '../commons/tabBarIcon';
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
    navigationOptions: {
      headerStyle: {
        height: 45,
        backgroundColor: '#eee',
      },
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
    navigationOptions: {
      headerStyle: {
        height: 45,
        backgroundColor: '#eee',
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Auth: {
      screen: AuthP,
      navigationOptions: {
        header: null,
      },
    },
    UserHome: UserHomeP,
    UserProfile: UserProfileP,
    favoriteEstates: favoriteEstatesP,
  },
  {
    defaultNavigationOptions: {
      // header: false,
      // headerVisible: false,

      headerStyle: {
        backgroundColor: '#FEFEFE',
        height: 30,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Iranian Sans',
        fontSize: 15,
      },
    },
    // headerMode: 'none',
  },
);

// Bottom Tab of HomePage
const MainTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'آخرین املاک',
        // tabBarIcon: ({tintColor}) => (
        //   <AntDesign name="home" size={18} style={{color: tintColor}} />
        // ),
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            source={
              focused
                ? require('../../assets/pictures/navImages/Icon_Home_Active.png')
                : require('../../assets/pictures/navImages/Icon_Home.png')
            }
          />
        ),
      },
    },

    NewEstate: {
      screen: NewEstateStack,
      navigationOptions: {
        tabBarLabel: 'سپردن ملک',
        tabBarIcon: ({tintColor, focused}) => (
          <AntDesign
            name={focused ? 'pluscircle' : 'pluscircleo'}
            size={25}
            style={{color: tintColor}}
          />
        ),
      },
    },

    Help: {
      screen: HelpP,
      navigationOptions: {
        tabBarLabel: 'درباره ',
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="contacts" size={18} style={{color: tintColor}} />
        ),
      },
    },
    Auth: {
      screen: AuthStack,
      navigationOptions: {
        tabBarLabel: 'ملکام من ',
        // tabBarIcon: ({tintColor}) => (
        //   <AntDesign name="user" size={18} style={{color: tintColor}} />
        // ),
        tabBarIcon: ({focused}) => (
          <TabBarIcon
            source={
              focused
                ? require('../../assets/pictures/navImages/Icon_Profile_Active.png')
                : require('../../assets/pictures/navImages/Icon_Profile.png')
            }
          />
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

// Customize Left Menu
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

const AppSwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: AppDrawerNavigator,
      navigationOptions: {
        drawerLabel: 'خانه',
        title: 'خانه',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('MelcomA/assets/icons/melcom.png')}
            resizeMode="contain"
            style={{width: 20, height: 20, tintColor}}
          />
        ),
      },
    },
    Splash: SplashP,
  },
  {initialRouteName: 'Splash'},
);

export default createAppContainer(AppSwitchNavigator);
