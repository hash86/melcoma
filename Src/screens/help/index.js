import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, View} from 'react-native';
class index extends Component {
  renderLoading = () => (
    <ActivityIndicator style={{flex: 1}} size="large" color="green" animating />
  );

  runFirst = `
      document.getElementsByTagName('nav')[0].style.display = "none";
  `;

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
