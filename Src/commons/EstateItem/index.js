import React from 'react';
import {
  View,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import Colors from 'MelcomA/src/constants/Colors';
import {ESTATETYPES, REQUESTS} from '../../../data/idNameDummy';
// import styles from './styles';

const EstateItem = ({item, onPress}) => {
  let estateType = ESTATETYPES.find(
    estateT => estateT.id === parseInt(item.estateTypeID),
  );
  let estateRequest = REQUESTS.find(
    er => er.id === parseInt(item.estateRequestID),
  );
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.itemCard}>
        <View style={styles.col}>
          <ImageBackground
            style={styles.thumbnail}
            source={{uri: item.images[0]}}>
            <View style={styles.imageRequestContainer}>
              <TextIranSans style={styles.imageEstateRequest}>
                {estateRequest.name}
              </TextIranSans>
            </View>
            <TextIranSans style={styles.imageCaption}>
              {item.agency}
            </TextIranSans>
          </ImageBackground>
        </View>

        <View style={[styles.col, styles.right]}>
          <TextIranSans style={styles.estateRegTime}>
            {item.dateReg}
          </TextIranSans>

          <TextIranSans numberOfLines={1} style={styles.estateTitle}>
            {item.location}
          </TextIranSans>
          <TextIranSans style={styles.estateItem2}>
            قیمت :{' '}
            <TextIranSans style={styles.estateItem2Value}>
              {item.price / 1000000} م
            </TextIranSans>
          </TextIranSans>
          <TextIranSans style={styles.estateItem2}>
            هر متر :{' '}
            <TextIranSans style={styles.estateItem2Value}>
              {(item.price / item.area / 1000000).toFixed(2)} م
            </TextIranSans>
          </TextIranSans>
          <View style={styles.estateItem3Group}>
            <TextIranSans style={[styles.estateItem3]}>
              {estateType.name}
            </TextIranSans>
            <TextIranSans style={[styles.estateItem3]}>
              {item.room} خواب
            </TextIranSans>
            <TextIranSans style={[styles.estateItem3]}>
              {item.area}متر
            </TextIranSans>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default EstateItem;

const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    width: '96%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    margin: '2%',
    marginBottom: '1%',
    borderRadius: 6,
    overflow: 'hidden',
  },
  thumbnail: {
    height: 100,
    width: '100%',
    justifyContent: 'flex-start',
    // flexDirection: 'row',
  },
  imageCaption: {
    fontSize: 9,
    color: Colors.fourth,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  imageRequestContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageEstateRequest: {
    fontSize: 7,
    color: Colors.white,
    // maxWidth: '30%',
    textAlign: 'center',
    padding: 2,
    margin: 4,
    backgroundColor: 'rgba(10,100,20,0.7)',
    borderRadius: 5,
  },
  col: {
    flex: 1,
    // margin: 5,
    // backgroundColor: 'blue',
  },
  right: {
    padding: 10,
  },

  estateRegTime: {
    fontSize: 8,
    color: Colors.second,
  },
  estateTitle: {
    fontSize: 14,
    color: Colors.third,
    // backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  estateItem2: {
    fontSize: 12,
    color: Colors.fifth,
  },
  estateItem2Value: {
    fontSize: 12,
    color: Colors.first,
  },
  estateItem3Group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  estateItem3: {
    fontSize: 10,
    color: Colors.first,
  },
});
