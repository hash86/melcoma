import React, {Component} from 'react';
import {Container, Item, Body, Input, Label, Button} from 'native-base';

import {
  ActivityIndicator,
  StatusBar,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import TimerConfirmCode from 'MelcomA/src/commons/timerConfirmCode';
import {validateMobile} from 'MelcomA/src/utils/Validation';
import AlertPopup from 'MelcomA/src/components/AlertPopup';
import Alerts from 'MelcomA/src/constants/alerts';
import Colors from 'MelcomA/src/constants/Colors';
export default class Auth extends Component {
  state = {
    loading: true,

    mobileNumber: '',
    password: '',
    confirmationCode: '',

    userID: '1',
    passwordShow: false,
    confirmationCodeShow: false,

    alertShow: false,
    alertActive: {
      title: '',
      description: '',
    },
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

    if (userToken != null && userToken.length > 0) {
      // Show User Home Page
      // alert(userToken);
      this.props.navigation.navigate('UserHome');
    } else {
      // Show Login Form
    }
  };

  _onChangeText(name) {
    alert(name);
    return text => {
      this.setState({[name]: text});
    };
  }

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
      //validate Mobile Number
      if (!validateMobile(this.state.mobileNumber)) {
        this.setState({alertActive: Alerts.alertWrongMobile});
        this.setState({alertShow: true});

        return;
      }

      this.setState({confirmationCodeShow: false});
      /* check password entered*/
      if (this.state.passwordShow && this.state.password.length === 0) {
        this.setState({alertActive: Alerts.alertEmptyPassword});
        this.setState({alertShow: true});
        return;
      }

      /* Validate in server */
      if (this.state.passwordShow) {
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

    this.setState({alertActive: Alerts.alertSentConfirmationCode});
    this.setState({alertShow: true});
  };

  _backPassword = () => {
    this.setState({passwordShow: true});
    this.setState({confirmationCodeShow: false});
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <Container style={styles.mainContainer}>
          {this.state.loading && (
            <ActivityIndicator size="large" style={{flex: 1}} />
          )}
          {!this.state.loading && (
            <View style={styles.loginContainer}>
              <Image
                source={require('../../../assets/icons/melcom.png')}
                style={styles.logo}
              />
              <TextIranSans style={styles.label}>
                شماره همراه خود را وارد کنید
              </TextIranSans>

              <TextInput
                style={[styles.textBox, {}]}
                placeholder="مثال 09123456789"
                placeholderTextColor={Colors.placeholderTextColor}
                onChangeText={mobileNumber => this.setState({mobileNumber})}
                keyboardType="numeric"
              />

              {this.state.passwordShow && (
                <TextInput
                  style={[styles.textBox, {}]}
                  placeholder="کلمه عبور"
                  placeholderTextColor={Colors.placeholderTextColor}
                  onChangeText={password => this.setState({password})}
                  keyboardType="numeric"
                  secureTextEntry
                />
              )}
              {this.state.confirmationCodeShow && (
                <TextInput
                  style={[styles.textBox, {}]}
                  placeholderTextColor={Colors.placeholderTextColor}
                  placeholder="کد دریافتی "
                  onChangeText={confirmationCode =>
                    this.setState({confirmationCode})
                  }
                  keyboardType="numeric"
                />
              )}
              <Button
                onPress={this._onPressLogin}
                style={styles.btnLogin}
                color={Colors.first}
                rounded
                success>
                <TextIranSans> ورود</TextIranSans>
                <AntDesign name={'login'} size={23} />
              </Button>
              {this.state.passwordShow && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this._forgetPass}>
                  <TextIranSans style={styles.labelForgetPassword}>
                    فراموشی کلمه عبور ؟
                  </TextIranSans>
                </TouchableOpacity>
              )}
              {this.state.confirmationCodeShow && (
                <View style={styles.timer}>
                  <TimerConfirmCode
                    startTime={true}
                    backPassword={this._backPassword}
                  />
                  <TextIranSans style={styles.labelActivationCode}>
                    مدت زمان اعتبار کد :
                  </TextIranSans>
                </View>
              )}
            </View>
          )}
          <StatusBar barStyle="default" />
          <AlertPopup
            description={this.state.alertActive.description}
            isVisible={this.state.alertShow}
            onPress={() => this.setState({alertShow: false})}
            title={this.state.alertActive.title}
          />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}
