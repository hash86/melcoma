import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/colors';
import Fonts from 'MelcomA/src/constants/fonts';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },

  loginContainer: {
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  logo: {
    width: '40%',
    height: '30%',
    // backgroundColor: 'green',
    marginBottom: 20,
  },
  label: {
    textAlign: 'center',
    fontFamily: Fonts.IranSans,
    fontSize: 12,
  },
  textboxContainer: {
    width: '85%',
    borderColor: 'white',
  },
  textBox: {
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: '#EBEBEB',
    margin: 5,

    color: Colors.seagreen,
  },

  btnLogin: {
    height: 40,
    margin: 2,
    justifyContent: 'center',
    marginHorizontal: '20%',
    width: '60%',
  },
});
