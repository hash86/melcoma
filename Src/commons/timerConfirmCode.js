import {StyleSheet, View, Text} from 'react-native';
// import TextIranSans from 'MelcomA/src/constants/IranSans';
import React, {Component} from 'react';

class TimerConfirmCode extends Component {
  state = {
    second: 59,
    minute: 1,
    timer: null,
  };

  componentDidMount() {
    this.onButtonStart();
  }
  componentWillUnmount() {}
  tick = () => {
    let secT = this.state.second,
      minT = this.state.minute;

    if (secT <= 0 && minT <= 0) {
      this._stopTimer();
      return;
    }

    if (secT >= 1) {
      this.setState({second: secT - 1});
    } else if (secT == 0) {
      this.setState({minute: minT - 1});
      this.setState({second: 59});
    }
  };

  onButtonStart = () => {
    let t = setInterval(this.tick, 1000);
    this.setState({timer: t});
  };

  _stopTimer() {
    let t = this.state.timer;
    clearInterval(t);
    this.setState({timer: t});
    this.props.backPassword();
  }

  render() {
    let {minute, second} = this.state;
    return (
      <View style={[Styles.container, this.props.viewStyle]}>
        <Text style={[Styles.time, this.props.textStyle]}>
          {minute < 10 ? '0' + minute.toString() : minute}
        </Text>
        <Text style={[Styles.time, this.props.textStyle]}>:</Text>
        <Text style={[Styles.time, this.props.textStyle]}>
          {second < 10 ? '0' + second.toString() : second}
        </Text>
      </View>
    );
  }
}

export default TimerConfirmCode;

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  time: {
    fontSize: 12,
  },
});
