import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from '../../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ItemMenu = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <TextIranSans style={styles.txt}>{title} </TextIranSans>
    <AntDesign color={Colors.second} size={12} name="left" />
  </TouchableOpacity>
);

export default ItemMenu;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 0.3,
    backgroundColor: Colors.white,
    padding: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.backFirst,
  },
  txt: {
    color: Colors.second,
    marginRight: 10,
    fontSize: 11,
  },
});
