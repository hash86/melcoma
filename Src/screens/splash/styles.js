import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/Colors';
import Fonts from 'MelcomA/src/constants/Fonts';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  logoContainer: {
    marginTop: -50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: '40%',
    height: '25%',
    // backgroundColor: 'green',
    // marginBottom: 20,
  },
  H1: {
    textAlign: 'center',
    fontFamily: Fonts.IranSans,
    fontSize: 15,
  },
  H2: {
    textAlign: 'center',
    fontFamily: Fonts.IranSans,
    fontSize: 12,
  },
});
