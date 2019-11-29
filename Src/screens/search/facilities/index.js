import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import ModalHeader from 'MelcomA/src/components/selectModal/components/modalHeader';

import CheckItem from '../../../commons/CheckItem';

export default ({
  extraData,
  items, // data source
  isVisible,
  keyExtractor,
  listEmptyComponent,
  onReachEnd, // when reach the bottom of screen
  onRefresh, // when drag page down for refresh page
  onHide,
  onFacilityChecked,
  title,
  close, // true = modal close or false = modal back
}) => {
  const renderItemContainer = ({item, index}) => (
    <CheckItem
      index={index}
      item={item}
      onFacilityChecked={onFacilityChecked}
    />
  );

  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropOpacity={0}
      isVisible={isVisible}
      onBackButtonPress={onHide}
      style={styles.modal}>
      <SafeAreaView style={styles.modalContent}>
        <ModalHeader onPress={onHide} title={title} close={close} />

        <FlatList
          data={items}
          extraData={extraData}
          keyExtractor={keyExtractor}
          renderItem={renderItemContainer}
          ListEmptyComponent={listEmptyComponent}
          onReachEnd={onReachEnd}
          onRefresh={onRefresh}
          // refreshing={refreshing}
        />
      </SafeAreaView>
    </Modal>
  );
};
