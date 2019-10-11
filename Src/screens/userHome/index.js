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

import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Fonts from '../../constants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class UserHome extends Component {
  state = {
    loading: true,
    mobileNumber: '',
    userID: '1',
  };
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    //this will switch to the App screen or Auth Screen
    if (userToken) {
      this.props.navigation.navigate('Home');
    } else {
      this.setState({loading: false});
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
      alert('ok');
      this._signInAsync();
    }
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.userID);
    this.props.navigation.navigate('Home');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
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
            <Label style={styles.label}>شماره همراه خود را وارد کنید</Label>
            <Item style={styles.textboxContainer}>
              <Input
                style={[styles.textBox, {}]}
                name="1"
                onChangeText={this._onChangeText}
                keyboardType="numeric"
              />
            </Item>

            <Button
              onPress={this._onPressLogin}
              style={styles.btnLogin}
              rounded
              success>
              <TextIranSans> ورود</TextIranSans>
              <AntDesign name={'login'} size={23} />
            </Button>
          </View>
        )}
        <StatusBar barStyle="default" />
      </Container>
    );
  }
}
