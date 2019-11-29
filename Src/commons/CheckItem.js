import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, Left, Switch, Body, Right, Button} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/Colors';

const CheckItem = ({index, item, onFacilityChecked}) => (
  <ListItem icon>
    <Left>
      <Switch
        value={item.enabled}
        onValueChange={value => {
          onFacilityChecked(index);
        }}
      />
    </Left>
    <Body>
      <TextIranSans style={styles.switch}>{item.name}</TextIranSans>
    </Body>
    <Right>
      <MaterialCommunityIcons name={item.iconName} size={23} />
      <Button style={{backgroundColor: '#FF9501'}}></Button>
    </Right>
  </ListItem>
);

export default CheckItem;

const styles = StyleSheet.create({
  switch: {
    fontSize: 13,
    color: Colors.green,
    paddingRight: 5,
  },
});
