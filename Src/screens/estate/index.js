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

import {
  ScrollView,
  View,
  Modal,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

import {WebView} from 'react-native-webview';
import Slideshow from 'react-native-image-slider-show';
import GLOBAL_STYLES from 'MelcomA/src/constants/mainStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import styles from './styles';
import AlertPopup from 'MelcomA/src/components/AlertPopup';
import HeaderTitle from '../../commons/headerTitle';
import HeaderBtn from '../../commons/headerBtn';

export default class Estate extends Component {
  state = {
    showTelOwner: 0,
    vTourVisible: false,
    vTourLoading: false,
  };

  static navigationOptions = ({
    navigation,
    navigation: {
      openDrawer,
      state: {params = {}},
    },
  }) => {
    return {
      headerTitle: <HeaderTitle>مشخصات ملک</HeaderTitle>,
      headerLeft: (
        <HeaderBtn
          name="left"
          left
          size={16}
          onPress={() => navigation.goBack(null)}
        />
      ),
      //title: 'برگشت',
      //TODO: put Title of Estate
    };
  };

  setVisibleVTour(visible) {
    this.setState({vTourVisible: visible});
  }

  renderLoading = () => (
    <ActivityIndicator style={{flex: 1}} size="large" color="green" animating />
  );

  runFirst = `
  document.getElementsByTagName('nav')[0].style.display = "none";
`;

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const {navigation} = this.props;
    const id = navigation.getParam('id', '0');
    const title = navigation.getParam('title', 'بدون عنوان');
    const {showTelOwner} = this.state;
    return (
      <Container>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding">
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
                <TextIranSans
                  style={{flex: 1, fontSize: 18, fontWeight: 'bold'}}>
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
                <Button
                  onPress={() => this.setVisibleVTour(true)}
                  style={{
                    flex: 1,
                    margin: 2,
                    justifyContent: 'center',
                    height: 40,
                  }}
                  rounded
                  danger>
                  <Icon name="call" />

                  <TextIranSans>تور</TextIranSans>
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
          </KeyboardAvoidingView>
        </ScrollView>
        <AlertPopup
          description={'9015977024'}
          isVisible={!!showTelOwner}
          onPress={() => this.setState({showTelOwner: ''})}
          title="شماره تماس"
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.vTourVisible}
          onRequestClose={() => alert('close')}>
          <View style={{marginTop: 22, flex: 1}}>
            <View style={{flex: 1}}>
              <View>
                <Text>تور سه بعدی</Text>
              </View>

              <WebView
                style={{flex: 1}}
                startInLoadingState={true}
                injectedJavaScript={this.runFirst}
                renderLoading={this.renderLoading}
                source={{
                  uri:
                    'https://melcom.ir/Content/Estates/157644_3496F6CE8509FD505D96DE04AFA7ABB6//vtour/tour.html',
                }}
                // onLoadStart={() => {   this.setState({vTourLoading: true}); }}
                // onLoadEnd={() => {  this.setState({vTourLoading: false});}}
                onError={syntheticEvent => {
                  const {nativeEvent} = syntheticEvent;
                  console.warn('WebView error: ', nativeEvent);
                }}
              />

              <View>
                <TouchableHighlight
                  onPress={() => {
                    this.setVisibleVTour(false);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}
