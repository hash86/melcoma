import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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
  ListItem,
  Picker,
  CheckBox,
  Grid,
  Col,
  Button,
} from 'native-base';
import S from 'MelcomA/src/constants/mainStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectModal from 'MelcomA/src/components/selectModal';
import FacilitiesModal from './facilities';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import styles from './styles';
import ImagePicker from 'MelcomA/src/components/imagePicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from 'MelcomA/src/constants/colors';

const CITIES = [
  'بجنورد',
  'مشهد',
  'تهران',
  'شیراز',
  'اصفهان',
  'نیشابور',
  'بجنشسیبشورد',
  'مششسیبهد',
  'تهرشسیبان',
  'شیشیسبشراز',
  'اصفبشسیبهان',
  'شسیبشبجنورد',
  'مشهشسیبشسد',
  'شسیبشتهران',
  'شیراشسیبشز',
  'اصفهاشسیبشسیبن',
  'شسیبشسنیشابور',
  'بجنشبشسیسیبشورد',
  'مشبشسیبشسیشسیبهد',
  'تهسشیبشسبرشسیبان',
  'شیشیشسیبشسسبشراز',
  'اصفبشسیشسیبشسبهاشسیبشسن',
];

class Home extends Component {
  state = {
    selected2: undefined,
    searchText: '',
    isCitiesModalVisible: false,
    isFacilitiesModalVisible: false,
    refresh: false, // refresh flat list facilities
    FACILITIES: [
      {id: 1, iconName: 'elevator', name: 'آسانسور', enabled: false},
      {id: 2, iconName: 'parking', name: 'پارکینگ', enabled: false},
      {id: 3, iconName: 'package', name: 'انباری', enabled: false},
      {id: 4, iconName: 'office-building', name: 'تراس', enabled: false},
      {id: 5, iconName: 'door', name: 'درب ضد سرقت', enabled: false},
    ],
  };

  _renderCity = item => (
    <TextIranSans onPress={() => this._onCityPress(item)} style={styles.city}>
      {item}
    </TextIranSans>
  );
  _onCityPress = city => {
    this.setState({city, isCitiesModalVisible: false});
    this.props.navigation.setParams({city});
  };
  _toggleCitiesModal = () =>
    this.setState({isCitiesModalVisible: !this.state.isCitiesModalVisible});

  _onChange = (k, v) => this.setState({[k]: v});

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
      state: {params = {}},
    },
  }) => {
    return {
      headerStyle: {
        height: 45,
        backgroundColor: '#eee',
      },
      title: 'سپردن ملک',
      headerRight: (
        <Icon
          onPress={params.toggleCitiesModal}
          style={styles.headerIcon}
          name="search"
        />
      ),
      headerLeft: (
        <Icon
          onPress={openDrawer}
          style={styles.headerIcon}
          name="ios-menu"
          size={20}
        />
      ),
    };
  };

  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }

  render() {
    return (
      <ScrollView>
        <Container style={S.Main.container}>
          <Content style={[{direction: 'rtl'}, S.Fonts.IranSans]}>
            <Form>
              <Item>
                <ImagePicker />
                <View style={{paddingRight: 5}}>
                  <TextIranSans style={{fontSize: 12}}>
                    بارگذاری تصاویر ملک:
                  </TextIranSans>
                </View>
              </Item>
              <Item>
                <Input
                  placeholder="منطقه"
                  onBlur={() => this.setState({isCitiesModalVisible: true})}
                />
                <FontAwesome5 name="map" size={18} style={{paddingRight: 8}} />
              </Item>
              <Item>
                <Button
                  style={{
                    flex: 1,
                    margin: 1,
                    flexDirection: 'row',
                    padding: 4,
                  }}
                  onPress={() =>
                    this.setState({isFacilitiesModalVisible: true})
                  }>
                  <Right>
                    <AntDesign color={Colors.black} name="left" size={23} />
                  </Right>
                  <Left>
                    <TextIranSans>امکانات</TextIranSans>
                  </Left>
                </Button>
              </Item>
              <Item>
                <Input placeholder="آدرس" />
                <FontAwesome5 name="map" size={18} style={{paddingRight: 8}} />
              </Item>
              <Item floatingLabel>
                <Label>عنوان ملک</Label>

                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>آدرس</Label>
                <Input />
              </Item>
              <Card>
                <CardItem header bordered style={{justifyContent: 'center'}}>
                  <TextIranSans>امکانات</TextIranSans>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Grid>
                      <Col>
                        <ListItem>
                          <CheckBox checked={false} />
                          <Body>
                            <TextIranSans>آسانسور</TextIranSans>
                          </Body>
                        </ListItem>
                        <ListItem>
                          <CheckBox checked={false} />
                          <Body>
                            <TextIranSans>پارکینگ</TextIranSans>
                          </Body>
                        </ListItem>
                      </Col>
                    </Grid>
                  </Body>
                </CardItem>
              </Card>
            </Form>
          </Content>
          <SelectModal
            title="انتخاب محله"
            items={CITIES.filter(c => c.includes(this.state.searchText))}
            keyExtractor={item => item}
            renderItem={this._renderCity}
            isVisible={this.state.isCitiesModalVisible}
            close
            search
            onHide={() => {
              this.setState({searchText: ''});
              this.setState({isCitiesModalVisible: false});
            }}
            onSearchTextChange={this._onChange}
          />
          <FacilitiesModal
            title="انتخاب امکانات"
            items={this.state.FACILITIES}
            extraData={this.state.refresh}
            keyExtractor={item => item.id.toString()}
            renderItem={this._renderCity}
            isVisible={this.state.isFacilitiesModalVisible}
            onFacilityChecked={this._onCheckedFacility}
            onHide={() => {
              this.setState({isFacilitiesModalVisible: false});
            }}
          />
        </Container>
      </ScrollView>
    );
  }
}

export default Home;
