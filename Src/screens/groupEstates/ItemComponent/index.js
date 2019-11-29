import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Styles from './style';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DetailItemComponent from '../DetailItemComponent';

export default ItemComponent = ({
  imgName,
  title,
  items,
  showItems,
  retFunc,
}) => {
  const [detailItem, setDetailItem] = useState(showItems);

  let backGround = null;
  switch (imgName) {
    case 'apartment':
      backGround = require('MelcomA/assets/pictures/groupEstates/apartment.jpg');
      break;
    case 'villa':
      backGround = require('MelcomA/assets/pictures/groupEstates/villa.jpg');
      break;
    case 'ground':
      backGround = require('MelcomA/assets/pictures/groupEstates/ground.jpg');
      break;
    case 'store':
      backGround = require('MelcomA/assets/pictures/groupEstates/store.jpg');
      break;
  }

  return (
    <View style={Styles.item}>
      <TouchableOpacity onPress={() => setDetailItem(!detailItem)}>
        <Image
          style={[Styles.backItems, {height: detailItem ? 70 : 120}]}
          source={backGround}
        />
        <TextIranSans style={Styles.itemTitle}>{title}</TextIranSans>
        <AntDesign
          name={detailItem ? 'up' : 'down'}
          size={20}
          style={Styles.dropIcon}
        />
      </TouchableOpacity>
      {detailItem && (
        <View style={[Styles.detailItemsContainer]}>
          {items.map(item => (
            <DetailItemComponent
              title={item.title}
              link={item.link}
              retFunc={retFunc}
              key={item.title}
            />
          ))}
        </View>
      )}
    </View>
  );
};
