import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Styles from './style';

import ItemComponent from './ItemComponent';

const GroupEstates = props => {
  const items = [
    {title: 'آپارتمان', image: 'apartment'},
    {title: 'ویلایی', image: 'villa'},
    {title: 'زمین و کلنگی', image: 'ground'},
    {title: 'مغازه ، دفتر و...', image: 'store'},
  ];
  const detailItems = [
    {
      groupName: 'apartment',
      title: 'تک خواب',
      link: {EstateTypeID: 1, room: 1},
    },
    {
      groupName: 'apartment',
      title: 'دوخواب ',
      link: {EstateTypeID: 1, room: 2},
    },
    {
      groupName: 'apartment',
      title: 'نوساز',
      link: {EstateTypeID: 1, year: 1398},
    },
    {groupName: 'apartment', title: 'لوکس', link: {EstateTypeID: 1, lux: true}},
    {
      groupName: 'villa',
      title: 'دوبلکس ',
      link: {EstateTypeID: 2, dublex: true},
    },
    {
      groupName: 'villa',
      title: 'سه خواب و بالاتر ',
      link: {EstateTypeID: 2, room: 3},
    },
    {groupName: 'villa', title: 'خوش نقشه', link: {EstateTypeID: 2}},
    {
      groupName: 'ground',
      title: 'اواقافی',
      link: {EstateTypeID: 3, documentType: 2},
    },
    {
      groupName: 'ground',
      title: 'سند دار',
      link: {EstateTypeID: 3, document: true},
    },
    {
      groupName: 'ground',
      title: 'مجوز دار',
      link: {EstateTypeID: 3, lic: true},
    },
    {groupName: 'store', title: 'مغازه', link: {EstateTypeID: 4}},
    {groupName: 'store', title: 'دفتر کار', link: {EstateTypeID: 5}},
    {groupName: 'store', title: 'کارگاه ', link: {EstateTypeID: 6}},
  ];

  const _searchEstates = _props => {
    // alert(props.EstateTypeID);
    props.navigation.navigate('Home', {..._props, ...{searchGroup: true}});
  };
  return (
    <ScrollView>
      <View style={Styles.container}>
        {items.map(i => {
          return (
            <ItemComponent
              imgName={i.image}
              title={i.title}
              items={detailItems.filter(
                detailItem => detailItem.groupName == i.image,
              )}
              retFunc={_searchEstates}
              showItems={false}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

// GroupEstates.navigationOptions = () => {
//   (title: 'Home');
// };

export default GroupEstates;
