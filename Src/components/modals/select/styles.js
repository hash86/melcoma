import {StyleSheet} from 'react-native';
import fonts from 'MelcomA/src/constants/fonts';
import colors from 'MelcomA/src/constants/colors';

export default StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: 'grey',
  },
  modalHeader: {
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: colors.backInputs,
    width: '97%',
    fontFamily: fonts.IranSans,
    paddingRight: 9,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.backInputs,
    margin: 4,
  },
  city: {
    color: colors.white,
    fontSize: 13,
  },

  cityView: {
    flex: 1,
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: colors.backInputs,
    paddingRight: 5,
    justifyContent: 'center',

    width: '100%',
  },
  headerIcon: {
    marginHorizontal: 15,
  },
});
