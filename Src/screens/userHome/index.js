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

export default class index extends Component {
  static navigationOptions = ({
    navigation: {
      state: {params = {}},
    },
  }) => {
    return {
      headerTitle: (
        <View style={styles.topMenuTitle}>
          <TextIranSans style={{fontSize: 13}}>صفحه کاربر</TextIranSans>
        </View>
      ),

      headerStyle: {
        backgroundColor: '#FEFEFE',
        height: 30,
      },
      headerTintColor: '#fff',
      headerLeft: (
        <AntDesign
          style={{margin: 6, marginLeft: 10}}
          name="user"
          size={16}
          onPress={params.userSignOut}
        />
      ),
      headerRight: (
        <AntDesign
          style={{margin: 6, marginRight: 10}}
          name="logout"
          size={16}
          onPress={params.userSignOut}
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      userSignOut: this._userSignOut,
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
