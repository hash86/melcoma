import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, View, Button} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/Colors';

import styles from './styles';
import HeaderBtn from '../../commons/headerBtn';
import HeaderTitle from '../../commons/headerTitle';
import ItemMenu from './Components/itemMenu';

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
          name="notification"
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
      <View>
        <TextIranSans style={styles.userName}>حمید شجاع</TextIranSans>
        <TextIranSans style={styles.userMobile}>09159770297</TextIranSans>
        <View style={styles.itemContainer}>
          <ItemMenu title="املاک من" onPress={() => {}} />
          <ItemMenu title="املاک مورد علاقه من" onPress={() => {}} />
          <ItemMenu title="تقاضاهای من" onPress={() => {}} />
          <ItemMenu title="نظراتی که ثبت کرده اید" onPress={() => {}} />
          <ItemMenu title="جعبه پیام ها" onPress={() => {}} />
          <ItemMenu title="ویرایش پروفایل من" onPress={this._userProfile} />
          <ItemMenu title="امتیاز به اپلیکیشن ملکام" onPress={() => {}} />
          <ItemMenu title="سوالات متداول" onPress={() => {}} />
          <ItemMenu title=" درباره ملکام" onPress={() => {}} />
          <ItemMenu title="خروج از حساب کاربری" onPress={this._userSignOut} />
        </View>
      </View>
    );
  }
}
