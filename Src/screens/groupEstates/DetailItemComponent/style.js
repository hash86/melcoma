import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/Colors';

export default StyleSheet.create({
  detailItem: {
    padding: 4,
    marginHorizontal: 4,
    borderBottomColor: Colors.sixth,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  detailText: {
    fontSize: 10,
    color: Colors.second,
  },
  leftIcon: {
    color: Colors.sixth,
    marginHorizontal: 2,
  },
});
