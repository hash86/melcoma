import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  Icon,
  Left,
  Right,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
} from 'native-base';
import S from '../Constants/mainStyle';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Header
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Left style={{flex: 1}}>
              <Icon
                name="ios-menu"
                size={20}
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Left>
            <Text
              style={[
                {fontSize: 17, alignItems: 'center', justifyContent: 'center'},
                S.Fonts.IranSans,
                S.Colors.white,
              ]}>
              سپردن ملک
            </Text>

            <Right style={{flex: 1}}>
              <Icon name="search" />
            </Right>
          </Header>
          <Content style={[{direction: 'rtl'}, S.Fonts.IranSans]}>
            <Form>
              <Item picker>
                <Icon active name="home" />
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
              </Item>
              <Item floatingLabel>
                <Icon active name="title" />
                <Label>عنوان ملک</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>آدرس</Label>
                <Icon active name="address" />
                <Input />
              </Item>
            </Form>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f0f'},
});

export default Home;
