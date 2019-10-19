import React from 'react';
import Colors from '../constants/colors';
import {StyleSheet, View} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';

const HeaderTitle = ({style, fontSize, color, children, ...rest}) => (
  <View {...rest} style={[Styles.topMenuTitle, style]}>
    <TextIranSans style={{fontSize: fontSize, color: color}}>
      {children}
    </TextIranSans>
  </View>
);

HeaderTitle.defaultPros = {
  color: Colors.black,
  fontSize: 13,
};

export default HeaderTitle;

const Styles = StyleSheet.create({
  topMenuTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 5,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 0,
  },
});
