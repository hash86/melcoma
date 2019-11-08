import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/Colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EstateFeatures = ({title, icon}) => (
  <View style={styles.badge}>
    <TextIranSans style={styles.text}>{title}</TextIranSans>
    <MaterialCommunityIcons name={icon} style={styles.icon} />
  </View>
);

export default EstateFeatures;
const styles = StyleSheet.create({
  badge: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.sixth,
    margin: 2,
    borderRadius: 6,
    padding: 3,
  },
  text: {
    textAlign: 'center',
    color: Colors.first,
    fontSize: 12,
    minWidth: 35,
  },
  icon: {
    fontSize: 15,
    color: Colors.seventh,
    lineHeight: 20,
  },
});
