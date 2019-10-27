import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/Colors';
import Fonts from 'MelcomA/src/constants/Fonts';

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
    fontSize: 12,
    marginBottom: 5,
    color: Colors.first,
  },

  textBox: {
    padding: 6,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#EBEBEB',
    margin: 6,
    width: '80%',
    fontFamily: Fonts.IranSans,
    color: Colors.seagreen,
  },
  btnLogin: {
    height: 40,
    margin: 2,
    justifyContent: 'center',
    marginHorizontal: '20%',
    width: '60%',
    color: Colors.first,
  },

  labelForgetPassword: {
    textAlign: 'center',

    fontSize: 12,
    marginTop: 5,
    color: Colors.fourth,
  },
  labelActivationCode: {
    textAlign: 'center',

    fontSize: 10,
    marginTop: 5,
  },
  timer: {
    flexDirection: 'row',
  },
});
