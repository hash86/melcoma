import React, {Component} from 'react';
import {View, FlatList, Modal, TextInput} from 'react-native';

import {Header, Icon, Right} from 'native-base';
import styles from './styles';
import Text_IranSans from 'MelcomA/src/constants/IranSans';

export default ({isVisible, searchText, data, onReachEnd, renderItem}) => {
  const _renderItem = ({item}) => (
    <View style={styles.cityView}>
      <Text_IranSans
        onPress={() => this.props.onCityPress(item)}
        style={styles.city}>
        {item}
      </Text_IranSans>
    </View>
  );

  return (
    <Modal
      visible={this.props.isCitiesModalVisible}
      onRequestClose={this.props.onRequestClose}>
      <Header style={styles.modalHeader}>
        <Text_IranSans> انتخاب شهر </Text_IranSans>
        <Right>
          <Icon
            name="close"
            onPress={() => this.setState({isCitiesModalVisible: false})}
          />
        </Right>
      </Header>
      <View style={styles.modalContent}>
        <TextInput
          placeholder="جستجو..."
          onChangeText={v => this._onChange('searchText', v)}
          style={styles.searchInput}
        />
        <FlatList
          data={this.props.dataSource.filter(city => city.includes(searchText))}
          renderItem={this._renderItem}
          keyExtractor={item => item}
        />
      </View>
    </Modal>
  );
};
