// @flow
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type Props = {
  uri: string,
};

export default ({ uri }: Props) => (
  <View activeOpacity={0.7} style={styles.mainContainer}>
    <Image style={styles.image} source={{ uri }} />
    {uri === 'imageUploader' && <Text style={styles.title}>Upload Photo</Text>}
  </View>
);
