import {StyleSheet} from 'react-native';
import Colors from 'MelcomA/src/constants/Colors';

export default StyleSheet.create({
  item: {
    // height: 100,
    backgroundColor: '#FFF',
  },
  backItems: {
    height: 120,
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.9,
    marginBottom: 1.5,
  },
  itemTitle: {
    color: 'white',
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  dropIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 4,
    paddingTop: 2,
    paddingLeft: 2,
    color: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  detailItemsContainer: {},
});
