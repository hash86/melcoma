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
import TextIranSans from 'MelcomA/src/constants/IranSans';
import styles from './styles';
import AlertPopup from 'MelcomA/src/components/AlertPopup';
import HeaderTitle from '../../commons/headerTitle';
import HeaderBtn from '../../commons/headerBtn';
import {ESTATES} from 'MelcomA/data/dummyData';
import {ESTATETYPES, REQUESTS, KEYTYPES} from '../../../data/idNameDummy';
import {commafy} from 'MelcomA/src/utils';
import CustomButton from 'MelcomA/src/components/CustomButton';
import Colors from 'MelcomA/src/constants/Colors';
import EstateProps from './components/EstateProps';
import SectionBar from './components/SectionBar';
import EstateFeatures from './components/EstateFeatures';

export default class Estate extends Component {
  state = {
    showTelOwner: 0,
    vTourVisible: false,
    vTourLoading: false,
    favoriteEstate: false,
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
      headerRight: (
        <HeaderBtn
          name="heart"
          right
          size={16}
          color={Colors.fifth}
          onPress={params.userSignOut}
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
    const {showTelOwner} = this.state;

    let estate = ESTATES.find(e => e.id === parseInt(id));
    let images = Object.keys(estate.images).map(function(key) {
      return {
        url: estate.images[key],
      };
    });

    let estateType = ESTATETYPES.find(
      estateT => estateT.id === parseInt(estate.estateTypeID),
    );
    let estateRequest = REQUESTS.find(
      er => er.id === parseInt(estate.estateRequestID),
    );

    return (
      <Container>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding">
            <View>
              <Slideshow dataSource={images} />
              <TextIranSans style={styles.estateRegTime}>
                تاریخ انتشار: {estate.dateReg}
              </TextIranSans>
            </View>
            <TextIranSans style={styles.estatePrice}>
              {commafy(estate.price)} تومان
            </TextIranSans>
            <TextIranSans style={styles.estateTitle}>
              {estateRequest.name}-{estateType.name}-{estate.location}
            </TextIranSans>
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                <CustomButton
                  icon="message1"
                  style={styles.btn}
                  title="پیامک"
                />
                <CustomButton
                  style={styles.btn}
                  title="تماس"
                  icon="phone"
                  onPress={() => this.setState({showTelOwner: 1})}
                />
                <CustomButton
                  style={styles.btn}
                  title="تور مجازی "
                  onPress={() => this.setVisibleVTour(true)}
                />
              </View>
              <View>
                <SectionBar title="مشخصات اصلی " />
                <View>
                  {estate.keyValues
                    .filter(
                      kitem =>
                        kitem.value !== true &&
                        (kitem.value > 0 || kitem.value.length > 1),
                    )
                    .map(kitem => {
                      let item = KEYTYPES.find(
                        i => i.id === parseInt(kitem.keyTypeID),
                      );

                      return (
                        <EstateProps
                          keyName={item.name}
                          keyValue={kitem.value}
                          isBoolean={item.isBoolean}
                          icon={item.icon}
                        />
                      );
                    })}
                </View>
                <SectionBar title="توضیحات  " />

                <View style={styles.estateItemDescContainer}>
                  <TextIranSans style={styles.estateItem2Value}>
                    چهار طبقه عالی فول امکانات بدون اسانسور تراس با مشتری کناری
                    میام املاک اسنکندریان جنب پیام نور
                  </TextIranSans>
                </View>
                <SectionBar title="امکانات  " />

                <View style={styles.isProps}>
                  {estate.keyValues
                    .filter(kitem => kitem.value === true)
                    .map(kitem => {
                      let item = KEYTYPES.find(
                        i => i.id === parseInt(kitem.keyTypeID),
                      );
                      return (
                        <EstateFeatures title={item.name} icon={item.icon} />
                      );
                    })}
                </View>
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
