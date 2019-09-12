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
import GLOBAL_STYLES from 'MelcomA/src/constants/mainStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import styles from './styles';
import AlertPopup from 'MelcomA/src/components/alertPopup';

export default class Estate extends Component {
  state = {
    showTelOwner: 0,
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
      headerTitle: (
        <View>
          <TextIranSans style={{fontSize: 13}}>برگشت</TextIranSans>
        </View>
      ),

      //title: 'برگشت',
      //TODO: put Title of Estate
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const {navigation} = this.props;
    const id = navigation.getParam('id', '0');
    const title = navigation.getParam('title', 'بدون عنوان');
    const {showTelOwner} = this.state;
    return (
      <Container>
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
              <TextIranSans style={{flex: 1, fontSize: 18, fontWeight: 'bold'}}>
                {title}
              </TextIranSans>
              <TextIranSans style={{flex: 1}}>یک ربع پیش</TextIranSans>
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
                <TextIranSans>پیامک</TextIranSans>
              </Button>
              <Button
                onPress={() => this.setState({showTelOwner: 1})}
                style={{
                  flex: 1,
                  margin: 2,
                  justifyContent: 'center',
                  height: 40,
                }}
                rounded
                danger>
                <Icon name="call" />

                <TextIranSans>تماس</TextIranSans>
              </Button>
            </View>
            <View>
              <View>
                <TextIranSans style={{backgroundColor: 'blue', fontSize: 16}}>
                  مشخصات اصلی
                </TextIranSans>
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
                    <TextIranSans>1387</TextIranSans>
                  </Left>
                  <Right>
                    <TextIranSans>سال ساخت</TextIranSans>
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
                    <TextIranSans>1387</TextIranSans>
                  </Left>
                  <Right>
                    <TextIranSans>سال ساخت</TextIranSans>
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
                    <TextIranSans>1387</TextIranSans>
                  </Left>
                  <Right>
                    <TextIranSans>سال ساخت</TextIranSans>
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
                    <TextIranSans>1387</TextIranSans>
                  </Left>
                  <Right>
                    <TextIranSans>سال ساخت</TextIranSans>
                  </Right>
                </View>
              </View>
              <View>
                <TextIranSans
                  style={{
                    backgroundColor: 'blue',
                    fontSize: 16,
                    marginBottom: 2,
                  }}>
                  مشخصات فرعی
                </TextIranSans>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}>
                <Right>
                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <TextIranSans>کابینت MDF</TextIranSans>
                    <Icon
                      name="star"
                      style={{fontSize: 15, color: '#fff', lineHeight: 20}}
                    />
                  </Badge>

                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <TextIranSans>آسانسور</TextIranSans>
                    <Icon
                      name="star"
                      style={{fontSize: 15, color: '#fff', lineHeight: 20}}
                    />
                  </Badge>

                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <TextIranSans>آسانسور</TextIranSans>
                    <Icon
                      name="star"
                      style={{fontSize: 15, color: '#fff', lineHeight: 20}}
                    />
                  </Badge>

                  <Badge info style={{flex: 1, flexDirection: 'row'}}>
                    <TextIranSans>آسانسور</TextIranSans>
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
                <TextIranSans>
                  چهار طبقه عالی فول امکانات بدون اسانسور تراس با مشتری کناری
                  میام املاک اسنکندریان جنب پیام نور
                </TextIranSans>
              </View>
            </View>
            <View>
              <TextIranSans> دیگر لینک ها </TextIranSans>
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
                <TextIranSans>خانه</TextIranSans>
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
                <TextIranSans>برگشت</TextIranSans>
              </Button>
            </View>
          </View>
        </ScrollView>
        <AlertPopup
          description={'9015977024'}
          isVisible={!!showTelOwner}
          onPress={() => this.setState({showTelOwner: ''})}
          title="شماره تماس"
        />
      </Container>
    );
  }
}
