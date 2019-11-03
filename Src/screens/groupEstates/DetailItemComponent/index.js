import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Styles from './style';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default DetailItemComponent = ({title, link, retFunc}) => {
  return (
    <TouchableOpacity onPress={() => retFunc(link)}>
      <View style={Styles.detailItem}>
        <TextIranSans style={Styles.detailText}>{title}</TextIranSans>
        <AntDesign name={'left'} size={13} style={Styles.leftIcon} />
      </View>
    </TouchableOpacity>
  );
};
