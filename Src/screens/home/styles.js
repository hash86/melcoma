import {StyleSheet} from 'react-native';
import fonts from 'MelcomA/src/constants/fonts';
import Colors from 'MelcomA/src/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topMenuCity: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'grey',
  },
  modalHeader: {
    alignItems: 'center',
  },

  city: {
    color: 'black',
    fontSize: 13,
  },
  estateImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch', //contain
    margin: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  estateItem3: {
    flex: 1,
    color: Colors.steelblue,
    fontSize: 10,
  },
  estateTitle: {
    flex: 1,
    color: Colors.seagreen,
    fontSize: 17,
  },
  estateItem2: {
    flex: 1,
    color: Colors.black,
    fontSize: 14,
  },
  estateItem2Value: {
    flex: 1,
    color: Colors.darkorange,
    fontSize: 14,
  },
  estateRegTime: {
    flex: 1,
    color: Colors.grey,
    fontSize: 7,
  },
  headerIcon: {
    marginHorizontal: 15,
  },
});
