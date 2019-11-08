import React, {Component} from 'react';
import AppContainer from './navigation/main';
import {YellowBox} from 'react-native';

// import {enableScreens} from 'react-native-screens';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

// enableScreens();
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
