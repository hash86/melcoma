import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/Colors';

import {Left, Right} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EstateProps = ({keyName, keyValue, icon}) => (
  <View style={styles.estateProps}>
    <Left>
      <TextIranSans style={styles.estateItem2Value}>{keyValue}</TextIranSans>
    </Left>
    <Right style={styles.group1}>
      <TextIranSans style={styles.estateItem2}>{keyName}</TextIranSans>
      <MaterialCommunityIcons name={icon} style={styles.icon} />
    </Right>
  </View>
);

export default EstateProps;

const styles = StyleSheet.create({
  estateProps: {
    borderBottomWidth: 0.5,
    borderColor: Colors.first,
    padding: 1,
    paddingHorizontal: 7,
    flexDirection: 'row',
    margin: 3,
  },
  group1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  estateItem2: {
    fontSize: 12,
    color: Colors.fifth,
  },
  icon: {
    fontSize: 18,
    color: Colors.seventh,
    lineHeight: 20,
    paddingHorizontal: 3,
  },
  estateItem2Value: {
    fontSize: 12,
    color: Colors.first,
  },
});
