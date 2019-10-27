import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';

const MARGIN_SIZE = 10;

const HeaderBtn = ({color, size, name, left, right, style, ...rest}) => {
  let _style = {};

  if (left) {
    _style.marginLeft = MARGIN_SIZE;
  } else if (right) {
    _style.marginRight = MARGIN_SIZE;
  }

  return (
    <TouchableOpacity style={[_style, style]} {...rest}>
      <AntDesign name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

HeaderBtn.defaultPros = {
  color: Colors.headerBtn,
  size: 16,
};
export default HeaderBtn;
