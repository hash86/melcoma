import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
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
import InputComponent from 'MelcomA/src/components/inputComponent';
import FacilitiesModal from './facilities';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import styles from './styles';
import ImagePicker from 'MelcomA/src/components/imagePicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from 'MelcomA/src/constants/Colors';
import 'MelcomA/src/constants/func.js';
import HeaderTitle from '../../commons/headerTitle';
import HeaderBtn from '../../commons/headerBtn';

import {REQUESTS, ESTATETYPES, ROOMS, YEARS} from 'MelcomA/data/idNameDummy';
class Home extends Component {
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
    valuesModal: [
      {
        ID: 0,
        title: ' نوع معامله',
        nameFA: '',
        selectedID: -1,
        isVisible: false,
      },
      {
        ID: 1,
        title: ' منطقه',
        nameFA: '',
        selectedID: -1,
        isVisible: false,
      },
      {
        ID: 2,
        title: ' نوع ملک',
        nameFA: '',
        selectedID: -1,
        isVisible: false,
      },
      {
        ID: 3,
        title: ' سن بنا',
        nameFA: '',
        selectedID: -1,
        isVisible: false,
      },
      {
        ID: 4,
        title: ' تعداد خواب ',
        nameFA: '',
        selectedID: -1,
        isVisible: false,
      },
    ],

    FACILITIES: [
      {id: 1, iconName: 'elevator', name: 'آسانسور', enabled: false},
      {id: 2, iconName: 'parking', name: 'پارکینگ', enabled: false},
      {id: 3, iconName: 'package', name: 'انباری', enabled: false},
      {id: 4, iconName: 'office-building', name: 'تراس', enabled: false},
      {id: 5, iconName: 'door', name: 'درب ضد سرقت', enabled: false},
    ],

    CITIES: [
      {id: 1, name: 'بجنورد'},
      {id: 2, name: 'مشهد'},
      {id: 3, name: 'تبریز'},
      {id: 4, name: 'تهران'},
      {id: 5, name: 'کاشان'},
      {id: 6, name: 'سبزوار'},
    ],
  };

  _onShowHideModal = (index, status) => {
    // change isVisibale of Modal to True to Show Modal
    let {valuesModal} = this.state;

    valuesModal[index].isVisible = status;
    this.setState({valuesModal});
  };

  _renderItem = (item, index) => (
    <TextIranSans onPress={() => this._onItemSelect(item)} style={styles.city}>
      {item.name}
    </TextIranSans>
  );

  _onItemSelect = ({id, name}) => {
    let {currentModal, valuesModal} = this.state;
    console.log('this.state.currentModal :', this.state.currentModal);
    //index = valuesModal.findIndex(f => f.name == this.state.currentModal);
    console.log('index :', currentModal);
    valuesModal[currentModal].nameFA = name;
    valuesModal[currentModal].selectedID = id;
    if (currentModal != 1) {
      valuesModal[currentModal].isVisible = false;
    } else {
      this.setState({isLocationModalVisible: false});
    }
    this.setState({valuesModal});

    console.log('valuesModal :', valuesModal);
    this.setState({city: name, isCitiesModalVisible: false});
    this.props.navigation.setParams({name});
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
  _onCheckedFacility = index => {
    let FACILITIES = this.state.FACILITIES;

    // Find index
    // console.log('index :', index);
    // console.log(`A.FACILITIES[${index}] :`, FACILITIES[index]);

    // index = FACILITIES.findIndex(f => f.id == id);

    //make changes to facility
    FACILITIES[index].enabled = !FACILITIES[index].enabled;

    //Save Value
    this.setState({FACILITIES});
    //console.log(`B.FACILITIES[${index}] :`, FACILITIES[index]);

    // Call to refresh Flat List
    let refresh = this.state.refresh;
    this.setState({refresh: !refresh});
  };

  static navigationOptions = ({
    navigation: {
      openDrawer,
      navigation,
      state: {params = {}},
    },
  }) => {
    return {
      headerTitle: <HeaderTitle fontSize={13}>سپردن ملک</HeaderTitle>,

      headerStyle: {
        backgroundColor: '#FEFEFE',
        height: 30,
      },
      headerTintColor: '#fff',
      headerLeft: (
        <HeaderBtn name="menufold" left size={16} onPress={openDrawer} />
      ),

      headerRight: (
        <HeaderBtn
          name="check"
          right
          size={16}
          color={Colors.seagreen}
          // onPress={params.userSignOut}
        />
      ),
    };
  };

  render() {
    const {currentModal, valuesModal, Data} = this.state;
    return (
      <Container style={styles.mainContainer}>
        <ScrollView>
          <KeyboardAvoidingView>
            <Item style={styles.buttonModal}>
              <Right>
                <TextIranSans style={{fontSize: 12}}>
                  بارگذاری تصاویر ملک:
                </TextIranSans>
              </Right>
            </Item>
            <Item>
              <ImagePicker />
            </Item>

            {/* Request Type  */}
            <Item style={{borderColor: 'white'}}>
              <Button
                style={styles.buttonModal}
                onPress={() => {
                  this._onShowHideModal(0, true);
                  this.setState({currentModal: 0});
                  this.setState({Data: REQUESTS});
                }}>
                <Left style={styles.buttonModalIcons}>
                  <AntDesign color={Colors.black} name="left" size={18} />
                  <TextIranSans style={styles.buttonText}>
                    ({valuesModal[0].nameFA})
                  </TextIranSans>
                </Left>
                <Right>
                  <TextIranSans style={styles.buttonText}>
                    {valuesModal[0].title}{' '}
                  </TextIranSans>
                </Right>
              </Button>
            </Item>

            {/* Estate Type  */}
            <Item style={{borderColor: 'white'}}>
              <Button
                style={styles.buttonModal}
                onPress={() => {
                  this._onShowHideModal(2, true);
                  this.setState({currentModal: 2});
                  this.setState({Data: ESTATETYPES});
                }}>
                <Left style={styles.buttonModalIcons}>
                  <AntDesign color={Colors.black} name="left" size={18} />
                  <TextIranSans style={styles.buttonText}>
                    ({valuesModal[2].nameFA})
                  </TextIranSans>
                </Left>
                <Right>
                  <TextIranSans style={styles.buttonText}>
                    {valuesModal[2].title}{' '}
                  </TextIranSans>
                </Right>
              </Button>
            </Item>

            {/* Location */}
            <Item style={{borderColor: 'white'}}>
              <Button
                style={styles.buttonModal}
                onPress={() => {
                  this.setState({isLocationModalVisible: true});
                  this.setState({currentModal: 1});
                }}>
                <Left style={styles.buttonModalIcons}>
                  <AntDesign color={Colors.black} name="left" size={18} />
                  <TextIranSans style={styles.buttonText}>
                    ({valuesModal[1].nameFA})
                  </TextIranSans>
                </Left>
                <Right>
                  <TextIranSans style={styles.buttonText}>منطقه</TextIranSans>
                </Right>
              </Button>
            </Item>

            {/* Estate Age */}
            {[3, 4].indexOf(valuesModal[2].selectedID) < 0 && (
              <Item style={{borderColor: 'white'}}>
                <Button
                  style={styles.buttonModal}
                  onPress={() => {
                    this._onShowHideModal(3, true);
                    this.setState({currentModal: 3});
                    this.setState({Data: YEARS});
                  }}>
                  <Left style={styles.buttonModalIcons}>
                    <AntDesign color={Colors.black} name="left" size={18} />
                    <TextIranSans style={styles.buttonText}>
                      ({valuesModal[3].nameFA})
                    </TextIranSans>
                  </Left>
                  <Right>
                    <TextIranSans style={styles.buttonText}>
                      {valuesModal[3].title}
                    </TextIranSans>
                  </Right>
                </Button>
              </Item>
            )}

            {/* Estate Rooms */}
            {[1, 2, 4].indexOf(valuesModal[2].selectedID) >= 0 && (
              <Item style={{borderColor: 'white'}}>
                <Button
                  style={styles.buttonModal}
                  onPress={() => {
                    this._onShowHideModal(4, true);
                    this.setState({currentModal: 4});
                    this.setState({Data: ROOMS});
                  }}>
                  <Left style={styles.buttonModalIcons}>
                    <AntDesign color={Colors.black} name="left" size={18} />
                    <TextIranSans style={styles.buttonText}>
                      ({valuesModal[4].nameFA})
                    </TextIranSans>
                  </Left>
                  <Right>
                    <TextIranSans style={styles.buttonText}>
                      {valuesModal[4].title}
                    </TextIranSans>
                  </Right>
                </Button>
              </Item>
            )}

            {/* Title */}
            <Item floatingLabel>
              <Label style={styles.label}>عنوان ملک</Label>

              <Input
                style={[styles.textBox]}
                onChangeText={title =>
                  this.setState({...this.state.valuesText, title: title})
                }
              />
            </Item>

            {/* Area */}
            <Item floatingLabel>
              <Label style={styles.label}>متراژ</Label>

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

            {/* Price */}
            {valuesModal[0].selectedID !== 3 && (
              <Item floatingLabel>
                <Label style={styles.label}>قیمت(تومان)</Label>

                <Input
                  style={[styles.textBox]}
                  onChangeText={price =>
                    this.setState({...this.state.valuesText, price: price})
                  }
                  keyboardType="numeric"
                />
              </Item>
            )}

            {/* Mortgage */}
            {valuesModal[0].selectedID === 3 && (
              <Item floatingLabel>
                <Label style={styles.label}>رهن(تومان)</Label>

                <Input
                  style={[styles.textBox]}
                  onChangeText={price =>
                    this.setState({...this.state.valuesText, price: price})
                  }
                  keyboardType="numeric"
                />
              </Item>
            )}
            {/* Rent */}
            {valuesModal[0].selectedID === 3 && (
              <Item floatingLabel>
                <Label style={styles.label}>اجاره(تومان)</Label>

                <Input
                  style={[styles.textBox]}
                  onChangeText={price =>
                    this.setState({...this.state.valuesText, price: price})
                  }
                  keyboardType="numeric"
                />
              </Item>
            )}

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

            {/* Description */}
            <Item floatingLabel>
              <Label style={styles.label}>توضیحات </Label>

              <Input
                onFocus={() => this.setState({options: {textAlign: 'right'}})}
                onBlur={() => this.setState({options: {textAlign: 'left'}})}
                style={[
                  styles.textBox,
                  {textAlign: this.state.options.textAlign},
                ]}
                multiline={true}
                numberOfLines={4}
              />
            </Item>

            {/* Facilities */}
            <Item style={{borderColor: 'white'}}>
              <Button
                style={styles.buttonModal}
                onPress={() => this.setState({isFacilitiesModalVisible: true})}>
                <Left style={styles.buttonModalIcons}>
                  <AntDesign color={Colors.black} name="left" size={18} />
                  <TextIranSans style={styles.buttonText}>
                    (
                    {
                      this.state.FACILITIES.filter(f => f.enabled == true)
                        .length
                    }
                    )
                  </TextIranSans>
                </Left>
                <Right>
                  <TextIranSans style={styles.buttonText}>امکانات</TextIranSans>
                </Right>
              </Button>
            </Item>
            <Card>
              <CardItem header bordered style={{justifyContent: 'center'}}>
                <TextIranSans style={styles.buttonText}>امکانات</TextIranSans>
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
                success>
                <TextIranSans style={{color: 'white'}}> ثبت ملک </TextIranSans>
                <AntDesign color="white" size={20} name="check" />
              </Button>
            </Item>
          </KeyboardAvoidingView>
        </ScrollView>
        <FacilitiesModal
          title="انتخاب امکانات"
          items={this.state.FACILITIES}
          extraData={this.state.refresh}
          keyExtractor={item => item.id.toString()}
          isVisible={this.state.isFacilitiesModalVisible}
          onFacilityChecked={this._onCheckedFacility}
          onHide={() => {
            this.setState({isFacilitiesModalVisible: false});
          }}
        />

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

        <SelectModal
          title={valuesModal[currentModal].title}
          items={Data}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
          isVisible={valuesModal[currentModal].isVisible}
          onHide={() => {
            this._onShowHideModal(currentModal, false);
          }}
        />
      </Container>
    );
  }
}

export default Home;
