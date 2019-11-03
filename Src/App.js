import React, {Component} from 'react';
import AppContainer from './navigation/main';
import {YellowBox} from 'react-native';
import {useScreen} from 'react-native-screens';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

useScreen();
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
