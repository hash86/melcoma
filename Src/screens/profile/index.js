import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {
  Icon,
  Left,
  Right,
  Card,
  CardItem,
  Container,
  Header,
  Content,
  Form,
  Item,
  Body,
  Input,
  Label,
  Button,
} from 'native-base';

import SelectModal from 'MelcomA/src/components/selectModal';

import TextIranSans from 'MelcomA/src/constants/IranSans';
import styles from './styles';
import ImagePicker from 'MelcomA/src/components/imagePicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from 'MelcomA/src/constants/colors';
import HeaderBtn from '../../commons/headerBtn';
import HeaderTitle from '../../commons/headerTitle';
import 'MelcomA/src/constants/func.js';
import colors from '../../constants/colors';

class Profile extends Component {
  constructor() {
    super();
  }
  state = {
    searchText: '',

    isFacilitiesModalVisible: false,
    isLocationModalVisible: false,
    refresh: false, // refresh flat list facilities
    Data: {},
    options: {textAlign: 'left'},
    valuesText: {
      price: -1,
      title: '',
      address: '',
      comment: '',
      area: -1,
      mortgage: -1,
      rent: -1,
      loan: -1,
    },
    currentModal: 0,

    CITIES: [
      {id: 1, name: 'بجنورد'},
      {id: 2, name: 'مشهد'},
      {id: 3, name: 'تبریز'},
      {id: 4, name: 'تهران'},
      {id: 5, name: 'کاشان'},
      {id: 6, name: 'سبزوار'},
    ],
  };

  _toggleCitiesModal = () =>
    this.setState({isCitiesModalVisible: !this.state.isCitiesModalVisible});

  _onChange = (k, v) => this.setState({[k]: v});

  _onTextChange2 = (text, val, body, name) => {
    console.log('text :', text);
    console.log('val :', val);
    console.log('body :', body);
    console.log('name :', name);
    if (text.length === 1 && name !== '6') {
      // this[`field${name}`].current._root.focus();
    } else if (text.length === 1 && name === '6') {
      // this.field5.current._root.blur();
    }
  };

  _onTextChange = text => {
    // console.log('key :', key);
    console.log('text :', text);
    if (text.length >= 1) {
      let {valuesText} = this.state;

      // switch (key) {
      //   case 'price':
      //     break;
      // }
      // valuesText[key] = text;
    }
  };
  static navigationOptions = ({
    navigation,
    navigation: {
      state: {params = {}},
    },
  }) => {
    return {
      headerTitle: <HeaderTitle>پروفایل</HeaderTitle>,
      // title: 'پروفایل کاربر',

      // headerTintColor: '#fff',
      headerLeft: (
        <HeaderBtn
          name="left"
          left
          size={16}
          color={Colors.HeaderBtn}
          onPress={() => navigation.goBack(null)}
        />
      ),
      headerRight: (
        <HeaderBtn
          name="check"
          right
          size={16}
          color={Colors.seagreen}
          onPress={params.userSignOut}
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      userSignOut: this._saveProfile,
      userHome: this._userHome,
    });
  }

  _saveProfile = async () => {
    this.props.navigation.navigate('UserHome');
    // alert('aaaa');
  };

  _userHome = async () => {
    this.props.navigation.navigate('UserHome');
    // alert('aaaa');
  };

  render() {
    const {currentModal, Data} = this.state;
    return (
      <Container style={styles.mainContainer}>
        <ScrollView>
          <KeyboardAvoidingView>
            <Item style={{justifyContent: 'center'}}>
              <Image
                style={styles.profileImage}
                source={require('MelcomA/assets/pictures/imgProfile.png')}
              />
            </Item>
            <Item>
              <ImagePicker />
            </Item>

            {/* Title */}
            <Item floatingLabel>
              <Label style={styles.label}>نام</Label>

              <Input
                style={[styles.textBox]}
                onChangeText={title =>
                  this.setState({...this.state.valuesText, title: title})
                }
              />
            </Item>

            {/* Mobile */}
            <Item floatingLabel>
              <Label style={styles.label}>تلفن همراه</Label>

              <Input
                style={[styles.textBox]}
                name="1"
                // placeholder="*"
                // autoCapitalize="none"
                // autoCorrect={false}

                // onChange={this._onTextChange2}
                // secureTextEntry
                keyboardType="numeric"
                onChangeText={area => {
                  this.setState({...this.state.valuesText, area: area});
                  console.log('area :', area);
                }}
              />
            </Item>

            {/* tel */}

            <Item floatingLabel>
              <Label style={styles.label}>تلفن</Label>

              <Input
                style={[styles.textBox]}
                onChangeText={price =>
                  this.setState({...this.state.valuesText, price: price})
                }
                keyboardType="numeric"
              />
            </Item>

            {/* address */}
            <Item floatingLabel>
              <Label style={styles.label}>آدرس </Label>

              <Input
                onFocus={() => this.setState({options: {textAlign: 'right'}})}
                onBlur={() => this.setState({options: {textAlign: 'left'}})}
                style={[
                  styles.textBox,
                  {textAlign: this.state.options.textAlign},
                ]}
              />
            </Item>

            <Card>
              <CardItem header bordered style={{justifyContent: 'center'}}>
                <TextIranSans style={styles.buttonText}>علایق</TextIranSans>
              </CardItem>
              <CardItem bordered></CardItem>
            </Card>
            <Item style={{marginBottom: 10, borderColor: 'white'}}>
              <Button
                style={{
                  height: 40,

                  flex: 1,
                  margin: 2,
                  justifyContent: 'center',
                  marginHorizontal: '20%',
                }}
                rounded
                success
                onPress={this._saveProfile}>
                <TextIranSans style={{color: 'white'}}>
                  {' '}
                  ثبت تغییرات
                </TextIranSans>
                <AntDesign color="white" size={20} name="check" />
              </Button>
            </Item>
          </KeyboardAvoidingView>
        </ScrollView>

        <SelectModal
          title="انتخاب منطقه"
          items={this.state.CITIES.filter(c =>
            c.name.includes(this.state.searchText),
          )}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
          isVisible={this.state.isLocationModalVisible}
          close
          search
          onHide={() => {
            this.setState({searchText: ''});
            this.setState({isLocationModalVisible: false});
          }}
          onSearchTextChange={this._onChange}
        />
      </Container>
    );
  }
}

export default Profile;
