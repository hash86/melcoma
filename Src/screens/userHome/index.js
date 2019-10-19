import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, View, Button} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/colors';
import Tab1 from '../help';
import Tab2 from '../userEstates';
import Tab3 from '../newEstate';
import styles from './styles';
import HeaderBtn from '../../commons/headerBtn';
import HeaderTitle from '../../commons/headerTitle';

export default class index extends Component {
  static navigationOptions = ({
    navigation: {
      state: {params = {}},
    },
  }) => {
    return {
      headerTitle: <HeaderTitle>صفحه کاربر</HeaderTitle>,

      headerLeft: (
        <HeaderBtn
          name="user"
          left
          size={16}
          color={Colors.HeaderBtn}
          onPress={params.userProfile}
        />
      ),
      headerRight: (
        <HeaderBtn
          name="logout"
          right
          size={16}
          color={Colors.darkRed}
          onPress={params.userSignOut}
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      userSignOut: this._userSignOut,
      userProfile: this._userProfile,
    });
  }

  _userSignOut = async () => {
    try {
      await AsyncStorage.setItem('userToken', '');
    } catch (error) {
      alert(error);
    }

    this.props.navigation.navigate('Auth');
    // alert('aaaa');
  };

  _userProfile = async () => {
    this.props.navigation.navigate('UserProfile');
    // alert('aaaa');
  };
  render() {
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={{borderBottomWidth: 1}}
          tabContainerStyle={{
            height: 28,
            paddingBottom: 5,
            backgroundColor: 'white',
          }}>
          <Tab
            tabStyle={{backgroundColor: 'white', height: 25}}
            textStyle={{
              color: Colors.seagreen,
              fontFamily: 'Iranian Sans',
              fontSize: 11,
            }}
            activeTabStyle={{backgroundColor: '#ECECEC', height: 26}}
            activeTextStyle={{
              color: Colors.seagreen,
              fontFamily: 'Iranian Sans',
              fontSize: 12,
            }}
            heading="راهنما">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: 'white', height: 25}}
            textStyle={{
              color: Colors.seagreen,
              fontFamily: 'Iranian Sans',
              fontSize: 11,
            }}
            activeTabStyle={{backgroundColor: '#ECECEC', height: 26}}
            activeTextStyle={{
              color: Colors.seagreen,
              fontFamily: 'Iranian Sans',
              fontSize: 12,
            }}
            heading="ملک های من">
            <Tab2 />
          </Tab>
          <Tab
            heading="مورد علاقه"
            tabStyle={{backgroundColor: 'white', height: 25}}
            textStyle={{
              color: Colors.seagreen,
              fontFamily: 'Iranian Sans',
              fontSize: 11,
            }}
            activeTabStyle={{backgroundColor: '#ECECEC', height: 26}}
            activeTextStyle={{
              color: Colors.seagreen,
              fontFamily: 'Iranian Sans',
              fontSize: 12,
            }}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
