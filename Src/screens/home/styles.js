import {StyleSheet} from 'react-native';
import fonts from 'MelcomA/src/constants/fonts';
import colors from 'MelcomA/src/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topMenuCity: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'grey',
  },
  modalHeader: {
    alignItems: 'center',
  },

  city: {
    color: 'black',
    fontSize: 13,
  },

  headerIcon: {
    marginHorizontal: 15,
  },
});
