// @flow
import type {Node, Element} from 'react';

import React from 'react';
import {Text, FlatList, SafeAreaView, View, TextInput} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import ModalHeader from './components/modalHeader';

type Props = {
  extraData?: any,
  items: Array<any>,
  isVisible: boolean,
  keyExtractor: (item: any) => string,
  listEmptyComponent?: Element<any>,
  onReachEnd?: () => void,
  onRefresh?: () => void,
  onHide: () => void,
  title: string | null,
  renderItem: (item: any, index: string) => Node,
};

export default ({
  extraData,
  items, // data source
  isVisible,
  keyExtractor,
  listEmptyComponent,
  onReachEnd, // when reach the bottom of screen
  onRefresh, // when drag page down for refresh page
  onHide,
  title,
  renderItem,
  close, // true = modal close or false = modal back
  search, // Searchc text box in top of modal
  onSearchTextChange,
}: Props) => {
  const renderItemContainer = ({item, index}) => (
    <View style={styles.itemContainer}>{renderItem(item, index)}</View>
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
        {/* <Border /> */}
        {search && (
          <TextInput
            placeholder="جستجو..."
            onChangeText={v => onSearchTextChange('searchText', v)}
            style={styles.searchInput}
          />
        )}
        <FlatList
          data={items}
          extraData={extraData}
          keyExtractor={keyExtractor}
          renderItem={renderItemContainer}
          ListEmptyComponent={listEmptyComponent}
          onReachEnd={onReachEnd}
          onRefresh={onRefresh}
        />
      </SafeAreaView>
    </Modal>
  );
};
