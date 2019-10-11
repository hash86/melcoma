import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, View} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import {Icon} from 'native-base';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

class index extends Component {
  renderLoading = () => (
    <ActivityIndicator style={{flex: 1}} size="large" color="green" animating />
  );

  runFirst = `
      document.getElementsByTagName('nav')[0].style.display = "none";
  `;

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
      title: 'شرایطو قوانین',
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

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          style={{flex: 1}}
          startInLoadingState={true}
          injectedJavaScript={this.runFirst}
          renderLoading={this.renderLoading}
          source={{uri: 'https://melcom.ir/Home/Rules'}}
        />
      </View>
    );
  }
}

export default index;
