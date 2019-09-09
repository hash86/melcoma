// @flow
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import Colors from 'MelcomA/src/constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Text_IranSans from 'MelcomA/src/constants/IranSans';

type Props = {
  close?: boolean,
  onPress: () => void,
  title: string | null,
};

export default ({close, onPress, title}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text_IranSans style={styles.title}>{title}</Text_IranSans>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.iconContainer, close ? {right: 0} : {left: 0}]}>
        <AntDesign
          color={Colors.black}
          name={close ? 'close' : 'left'}
          size={23}
        />
      </TouchableOpacity>
    </View>
  );
};
