import React, {Component} from 'react';
import {
  Container,
  ListItem,
  Text,
  Switch,
  Icon,
  Left,
  Right,
  Card,
  CardItem,
  Header,
  Content,
  Form,
  Item,
  Body,
  Input,
  Label,
  Button,
} from 'native-base';

import {ActivityIndicator, StatusBar, View, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Fonts from '../../constants/fonts';

export default class Auth extends Component {
  state = {
    loading: true,
    mobileNumber: '',
    userID: '1',
    passwordShow: false,
    confirmationCodeShow: false,
  };
  componentDidMount() {
    this._bootstrapAsync();
    this.setState({passwordShow: false});
    this.setState({confirmationCodeShow: false});
  }

  // Fetch the token from storage then navigate
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    //this will switch to the App screen or Auth Screen
    this.setState({loading: false});

    if (userToken.length > 0) {
      // Show User Home Page
      // alert(userToken);
      this.props.navigation.navigate('UserHome');
    } else {
      // Show Login Form
    }
  };

  _onChangeText = text => {
    this.setState({mobileNumber: text});
    // alert(text);
  };

  _onPressLogin = () => {
    // fetch('https://mywebsite.com/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     return responseJson.movies;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    if (this.state.userID != '') {
      this.setState({confirmationCodeShow: false});
      if (this.state.passwordShow /* check password enter*/) {
        this._signInAsync();
      } else {
        this.setState({passwordShow: !this.state.passwordShow});
      }
    }
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.userID);
    this.props.navigation.navigate('UserHome');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _forgetPass = () => {
    this.setState({passwordShow: false});
    this.setState({confirmationCodeShow: true});
    alert('پیامک حاوی کد فعاسازی ارسال شد');
  };

  render() {
    return (
      <Container style={styles.mainContainer}>
        {this.state.loading && (
          <ActivityIndicator size="large" style={{flex: 1}} />
        )}

        {!this.state.loading && (
          <View style={styles.loginContainer}>
            <Image
              source={require('../../../assets/icons/melcom.png')}
              style={styles.logo}></Image>
            <TextIranSans style={styles.label}>
              شماره همراه خود را وارد کنید
            </TextIranSans>
            <Item style={styles.textboxContainer}>
              <Input
                style={[styles.textBox, {}]}
                name="1"
                placeholder="مثال 09123456789"
                placeholderTextColor="#CECECE"
                onChangeText={this._onChangeText}
                keyboardType="numeric"
              />
            </Item>
            {this.state.passwordShow && (
              <Item style={styles.textboxContainer}>
                <Input
                  style={[styles.textBox, {}]}
                  name="1"
                  placeholder="کلمه عبور"
                  placeholderTextColor="#CECECE"
                  onChangeText={this._onChangeText}
                  keyboardType="numeric"
                />
              </Item>
            )}
            {this.state.confirmationCodeShow && (
              <Item style={styles.textboxContainer}>
                <Input
                  style={[styles.textBox, {}]}
                  name="1"
                  placeholderTextColor="#CECECE"
                  placeholder="کد دریافتی "
                  onChangeText={this._onChangeText}
                  keyboardType="numeric"
                />
              </Item>
            )}
            <Button
              onPress={this._onPressLogin}
              style={styles.btnLogin}
              rounded
              success>
              <TextIranSans> ورود</TextIranSans>
              <AntDesign name={'login'} size={23} />
            </Button>
            {this.state.passwordShow && (
              <TextIranSans
                style={styles.labelForgetPassword}
                onPress={this._forgetPass}>
                فراموشی کلمه عبور ؟
              </TextIranSans>
            )}
          </View>
        )}
        <StatusBar barStyle="default" />
      </Container>
    );
  }
}
