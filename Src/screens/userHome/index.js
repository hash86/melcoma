import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, View} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import {Icon} from 'native-base';
import styles from './styles';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import Tab1 from '../help';
import Tab2 from '../userEstates';

import Tab3 from '../newEstate';
import AntDesign from 'react-native-vector-icons/AntDesign';

class index extends Component {
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
      title: 'ٌصفحه کاربر',
      headerRight: (
        <Icon
          // onPress={params.toggleCitiesModal}
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

  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="راهنما">
            <Tab1 />
          </Tab>
          <Tab heading="ملک های من">
            <Tab2 />
          </Tab>
          <Tab heading="مورد علاقه">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default index;
