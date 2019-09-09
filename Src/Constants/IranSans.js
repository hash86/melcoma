import React from 'react';
import {Text} from 'react-native';

export default props => {
  // I added this functionality so when we're passing
  // an array as style, we can handle it properly
  const customStyle = Array.isArray(props.style)
    ? props.style.map(style => {
        if (style) {
          return style;
        }
      })
    : props.style;

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: `Iranian Sans`,
        },
        customStyle,
      ]}>
      {props.children}
    </Text>
  );
};

//-${  props.fontWeight ? props.fontWeight : 'Regular'}`,
