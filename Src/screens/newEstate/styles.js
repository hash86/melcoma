import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/colors';
import Fonts from 'MelcomA/src/constants/fonts';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
    paddingRight: 3,
    paddingLeft: 3,

    // paddingLeft: 10,
  },
  buttonModal: {
    flex: 1,
    margin: 1,
    flexDirection: 'row',
    padding: 4,
    backgroundColor: Colors.backInputs,
    textAlign: 'left',
    fontSize: 12,
    height: 30,
    marginBottom: 5,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 12,
  },

  buttonModalIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    top: 6,
    fontFamily: Fonts.IranSans,
    fontSize: 10,
  },
  textBox: {
    height: 40,
    fontFamily: Fonts.IranSans,
    fontSize: 10,
    textAlign: 'left',
  },
});
