// @flow
//import type { Node } from 'react';

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

// type Props = {
//   buttons?: Array<AlertButton>,
//   description?: string,
//   onPress?: () => void,
//   isVisible: boolean,
//   leftToRightTransition?: boolean,
//   title: string,
// };

export default ({
  buttons,
  description,
  isVisible,
  leftToRightTransition = true,
  onPress,
  title,
}) => {
  const _renderButton = ({buttonStyle, onPress, title, titleStyle}) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
        <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationIn={leftToRightTransition && 'slideInLeft'}
      animationOut={leftToRightTransition && 'slideOutRight'}
      backdropOpacity={0.6}
      isVisible={isVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonsContainer}>
          {buttons
            ? buttons.map(button => _renderButton(button))
            : _renderButton({onPress, title: 'OK'})}
        </View>
      </View>
    </Modal>
  );
};
