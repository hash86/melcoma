import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Badge,
} from 'native-base';
import {ScrollView, View, Text} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default class Estate extends Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const {navigation} = this.props;
    const id = navigation.getParam('id', '0');
    const title = navigation.getParam('title', 'بدون عنوان');

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>برگشت</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View>
            <Slideshow
              dataSource={[
                {url: 'http://placeimg.com/640/480/any'},
                {url: 'http://placeimg.com/640/480/any'},
                {url: 'http://placeimg.com/640/480/any'},
              ]}
            />
          </View>
          <View style={{flex: 1, padding: 2}}>
            <View style={{flex: 1}}>
              <Text style={{flex: 1, fontSize: 18, fontWeight: 'bold'}}>
                {title}
              </Text>
              <Text style={{flex: 1}}>یک ربع پیش</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
              <Button
                style={{
                  height: 40,
                  flex: 1,
                  margin: 2,
                  justifyContent: 'center',
                }}
                rounded
                success>
                <Icon name="paper" />
                <Text>پیامک</Text>
              </Button>
              <Button
                style={{
                  flex: 1,
                  margin: 2,
                  justifyContent: 'center',
                  height: 40,
                }}
                rounded
                danger>
                <Icon name="call" />

                <Text>تماس</Text>
              </Button>
            </View>
            <View>
              <View>
                <Text style={{backgroundColor: 'blue', fontSize: 16}}>
                  مشخصات اصلی
                </Text>
              </View>
              <View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    padding: 1,
                    borderColor: 'gray',
                    flexDirection: 'row',
                    margin: 3,
                  }}>
                  <Left>
                    <Text>1387</Text>
                  </Left>
                  <Right>
                    <Text>سال ساخت</Text>
                  </Right>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    padding: 1,
                    borderColor: 'gray',
                    flexDirection: 'row',
                    margin: 3,
                  }}>
                  <Left>
                    <Text>1387</Text>
                  </Left>
                  <Right>
                    <Text>سال ساخت</Text>
                  </Right>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    padding: 1,
                    borderColor: 'gray',
                    flexDirection: 'row',
                    margin: 3,
                  }}>
                  <Left>
                    <Text>1387</Text>
                  </Left>
                  <Right>
                    <Text>سال ساخت</Text>
                  </Right>
                </View>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    padding: 1,
                    borderColor: 'gray',
                    flexDirection: 'row',
                    margin: 3,
                  }}>
                  <Left>
                    <Text>1387</Text>
                  </Left>
                  <Right>
                    <Text>سال ساخت</Text>
                  </Right>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    backgroundColor: 'blue',
                    fontSize: 16,
                    marginBottom: 2,
                  }}>
                  مشخصات فرعی
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}>
                <Right>
                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <Text>کابینت MDF</Text>
                    <Icon
                      name="star"
                      style={{fontSize: 15, color: '#fff', lineHeight: 20}}
                    />
                  </Badge>

                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <Text>آسانسور</Text>
                    <Icon
                      name="star"
                      style={{fontSize: 15, color: '#fff', lineHeight: 20}}
                    />
                  </Badge>

                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <Text>آسانسور</Text>
                    <Icon
                      name="star"
                      style={{fontSize: 15, color: '#fff', lineHeight: 20}}
                    />
                  </Badge>

                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <Text>آسانسور</Text>
                    <Icon
                      name="star"
                      style={{fontSize: 15, color: '#fff', lineHeight: 20}}
                    />
                  </Badge>
                </Right>
              </View>
              <View
                style={{
                  borderTopWidth: 0.5,
                  padding: 1,
                  borderColor: 'gray',
                  flexDirection: 'row',
                  margin: 3,
                }}>
                <Text>
                  چهار طبقه عالی فول امکانات بدون اسانسور تراس با مشتری کناری
                  میام املاک اسنکندریان جنب پیام نور
                </Text>
              </View>
            </View>
            <View>
              <Text> دیگر لینک ها </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Button
                style={{
                  flex: 1,
                  margin: 2,
                  justifyContent: 'center',
                  height: 40,
                }}
                rounded
                danger
                onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name="home" />
                <Text>خانه</Text>
              </Button>
              <Button
                style={{
                  flex: 1,
                  margin: 2,
                  justifyContent: 'center',
                  height: 40,
                }}
                rounded
                danger
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="home" />
                <Text>برگشت</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
