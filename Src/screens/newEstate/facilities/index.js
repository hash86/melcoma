import React from 'react';
import {FlatList, SafeAreaView, View, TextInput} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import ModalHeader from 'MelcomA/src/components/selectModal/components/modalHeader';
import {
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextIranSans from 'MelcomA/src/constants/IranSans';

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
}) => {
  const renderItemContainer = ({item, index}) => (
    // <View style={styles.itemContainer}>{renderItem(item, index)}</View>
    <ListItem icon>
      <Left>
        <Switch value={item.enabled} onValueChange={value => alert(value)} />
      </Left>
      <Body>
        <TextIranSans style={styles.switch}>{item.name}</TextIranSans>
      </Body>
      <Right>
        <MaterialCommunityIcons name={item.iconName} size={23} />
        <Button style={{backgroundColor: '#FF9501'}}></Button>
      </Right>
    </ListItem>
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
        />
      </SafeAreaView>
    </Modal>
  );
};
