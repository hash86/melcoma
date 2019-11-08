import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/Colors';

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
    fontSize: 17,
    textAlign: 'center',
  },
  description: {
    color: Colors.grey,
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: Colors.first,
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
