import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/colors';

export default StyleSheet.create({
  modalContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    width: 230,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    color: Colors.grey,
    fontSize: 22,
    textAlign: 'center',
  },
  description: {
    color: Colors.grey,
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonTitle: {
    color: Colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
});
