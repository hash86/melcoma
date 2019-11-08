import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/Colors';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  btn: {
    flex: 1,
    margin: 5,
  },
  estatePrice: {
    fontSize: 15,
    color: Colors.first,
    backgroundColor: 'rgba(0,0,0,0.2)',
    textAlign: 'center',
    paddingTop: 3,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.3,
  },
  estateRegTime: {
    padding: 3,
    fontSize: 8,
    color: Colors.white,
    backgroundColor: 'rgba(0,0,0,0.3)',
    textAlign: 'left',
    marginTop: -17,
  },
  estateTitle: {
    fontSize: 14,
    color: Colors.third,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 5,
  },

  estateProps: {
    borderBottomWidth: 0.5,
    borderColor: Colors.first,
    padding: 1,
    flexDirection: 'row',
    margin: 3,
  },
  estateItem2: {
    fontSize: 12,
    color: Colors.fifth,
  },
  estateItem2Value: {
    fontSize: 12,
    color: Colors.first,
  },
  isProps: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  estateItem3Group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  estateItem3: {
    fontSize: 10,
    color: Colors.first,
  },
  estateItemDescContainer: {
    flexDirection: 'row',
    margin: 3,
    paddingHorizontal: 3,
  },
});
