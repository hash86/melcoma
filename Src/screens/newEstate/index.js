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
import styles from './styles';

class Home extends Component {
  state = {
    selected2: undefined,
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
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  placeholder="شهر"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}>
                  <Picker.Item label="بجنورد" value="key0" />
                  <Picker.Item label="تهران" value="key1" />
                  <Picker.Item label="مشهد" value="key2" />
                  <Picker.Item label="کیش" value="key3" />
                  <Picker.Item label="اهواز" value="key4" />
                </Picker>
                <FontAwesome5 name="city" size={18} style={{paddingRight: 8}} />
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
        </Container>
      </ScrollView>
    );
  }
}

export default Home;
