import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  Button: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    height: 30,
    margin: 5,
  },
  deleteButton: {
    marginTop: -20,
    marginLeft: 3,
  },
  Image: {
    width: 69,
    height: 69,
    margin: 2,
    borderRadius: 5,
  },
});
