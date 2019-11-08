import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/Colors';

const SectionBar = ({title}) => (
  <View>
    <TextIranSans style={styles.sectionBar}>{title} </TextIranSans>
  </View>
);

export default SectionBar;

const styles = StyleSheet.create({
  sectionBar: {
    backgroundColor: Colors.sixth,
    color: Colors.second,
    fontSize: 13,
    padding: 5,
  },
});
