import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default CustomButton = props => {
  const {title = 'Enter', style = {}, textStyle = {}, onPress, icon} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <TextIranSans style={[styles.text, textStyle]}>
        {' '}
        {props.title}
      </TextIranSans>
      {icon && <AntDesign style={styles.text} name={icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },

  text: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});
