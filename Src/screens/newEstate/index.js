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
} from 'native-base';
import S from 'MelcomA/src/constants/mainStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectModal from 'MelcomA/src/components/selectModal';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import styles from './styles';

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
                <Input
                  placeholder="منطقه"
                  onBlur={() => this.setState({isCitiesModalVisible: true})}
                />
                <FontAwesome5 name="map" size={18} style={{paddingRight: 8}} />
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
                  <Text>امکانات</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Grid>
                      <Col>
                        <ListItem>
                          <CheckBox checked={false} />
                          <Body>
                            <Text>آسانسور</Text>
                          </Body>
                        </ListItem>
                        <ListItem>
                          <CheckBox checked={false} />
                          <Body>
                            <Text>پارکینگ</Text>
                          </Body>
                        </ListItem>
                      </Col>
                      <Col>
                        <ListItem>
                          <CheckBox checked={false} />
                          <Body>
                            <Text>آسانسور</Text>
                          </Body>
                        </ListItem>
                        <ListItem>
                          <CheckBox checked={false} />
                          <Body>
                            <Text>پارکینگ</Text>
                          </Body>
                        </ListItem>
                        <ListItem>
                          <CheckBox checked={false} />
                          <Body>
                            <Text>آسانسور</Text>
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
        </Container>
      </ScrollView>
    );
  }
}

export default Home;
