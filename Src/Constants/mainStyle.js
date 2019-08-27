import {StyleSheet, Dimensions} from 'react-native';
var width = Dimensions.get('window').width;
const Main = StyleSheet.create({
  Container: {
    backgroundColor: '#ccc',
    fontFamily: 'Iranian Sans',
  },
  Center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: 128,
    height: 128,
    marginTop: 50,
  },
  H1: {
    fontSize: 20,
  },
});

const Colors = StyleSheet.create({
  red: {
    color: 'red',
  },
  gray: {
    color: 'gray',
  },
  facebook: {
    color: '#3b5998',
  },
  white: {
    color: 'white',
  },
  green: {
    color: 'green',
  },
  darkorange: {
    color: 'darkorange',
    fontFamily: 'Iranian Sans',
  },
  steelblue: {
    color: 'steelblue',
  },
  seagreen: {
    fontFamily: 'Iranian Sans',

    color: 'seagreen',
  },
});

const Aligns = StyleSheet.create({
  center: {
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
});

const Buttons = StyleSheet.create({
  Primary: {
    backgroundColor: '#3b5998',
    width: width * 0.8,
    borderRadius: 5,
    padding: 5,
    marginTop: 4,
    alignItems: 'center',
  },
  Secondary: {
    backgroundColor: '#D44638',
    width: width * 0.8,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
});

const Card = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    minHeight: 140,
    borderRadius: 5,
    padding: 5,
    marginTop: 4,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 1,
    marginRight: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 2,
    marginRight: 2,
    fontFamily: 'Iranian Sans',
  },
  Secondary: {
    backgroundColor: '#D44638',
    width: width * 0.8,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
});

const Fonts = StyleSheet.create({
  IranSans: {
    fontFamily: 'Iranian Sans',
  },
});
export default {Main, Buttons, Colors, Aligns, Card, Fonts};
