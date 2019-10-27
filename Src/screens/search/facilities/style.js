import {StyleSheet} from 'react-native';

import Colors from 'MelcomA/src/constants/Colors';
import fonts from 'MelcomA/src/constants/Fonts';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: Colors.backInputs,
    paddingRight: 5,
    justifyContent: 'center',

    width: '100%',
  },
  modal: {
    margin: 0,
  },
  modalContent: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  searchInput: {
    backgroundColor: Colors.backInputs,
    width: '97%',
    fontFamily: fonts.IranSans,
    paddingRight: 9,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.backInputs,
    margin: 4,
  },
  switch: {
    fontSize: 13,
    color: Colors.green,
    paddingRight: 5,
  },
});
