import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/Colors';

export default StyleSheet.create({
  image: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: Colors.greyLight1,
    borderRadius: 5,
    height: 98,
    justifyContent: 'flex-end',
    margin: 6,
    overflow: 'hidden',
    width: 95,
  },
  title: {
    backgroundColor: Colors.greyLight4,
    fontSize: 11,
    paddingVertical: 5,
    textAlign: 'center',
    width: '100%',
  },
});
