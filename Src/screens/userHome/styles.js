import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topMenuTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 5,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 0,
  },

  item: {
    borderBottomWidth: 0.4,
  },
  userName: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  userMobile: {
    textAlign: 'center',
    fontSize: 11,
  },
});
