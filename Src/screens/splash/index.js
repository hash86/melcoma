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
  Animated,
} from 'react-native';
import styles from './styles';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Fonts from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OnBoardingLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.Logo}
        source={require('../../../assets/icons/melcom.png')}
      />
      <TextIranSans style={styles.H1}>Melcom | ملکام</TextIranSans>
      <TextIranSans style={styles.H2}>بی زحمت خونه دار شو</TextIranSans>
    </View>
  );
};

export default class Splash extends Component {
  state = {
    loading: true,
    position: new Animated.Value(0),
    userID: '1',
  };

  positionAnimate = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 500,

      useNativeDriver: true,
    }).start(() => this.onAnimationFinished());
  };

  onAnimationFinished() {
    this.props.navigation.navigate('Home');
  }
  componentDidMount() {
    this._bootstrapAsync();
    Animated.parallel([this.positionAnimate()]).start();
  }

  // Fetch the token from storage then navigate
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userToken');
    // //this will switch to the App screen or Auth Screen
    this.setState({loading: false});
    // if (userToken) {
    //   // Show User Home Page
    //   this.props.navigation.navigate('UserHome');
    // } else {
    //   // Show Login Form
    // }
  };

  _onChangeText = text => {
    // this.setState({mobileNumber: text});
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
    // if (this.state.userID != '') {
    //   alert('ok');
    //   this._signInAsync();
    // }
  };

  _signInAsync = async () => {
    // await AsyncStorage.setItem('userToken', this.state.userID);
    // this.props.navigation.navigate('UserHome');
  };

  _signOutAsync = async () => {
    // await AsyncStorage.clear();
    // this.props.navigation.navigate('Auth');
  };

  render() {
    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    return (
      <Container style={styles.mainContainer}>
        {this.state.loading && (
          <ActivityIndicator size="large" style={{flex: 1}} />
        )}

        {!this.state.loading && (
          <Animated.View
            style={{
              flex: 1,

              transform: [
                {
                  translateY: logoTranslate,
                },
              ],
            }}>
            <OnBoardingLogo />
          </Animated.View>
        )}
        <StatusBar barStyle="default" />
      </Container>
    );
  }
}
