import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import TextIranSans from 'MelcomA/src/constants/IranSans';
// type Props = {
//   buttons?: Array<AlertButton>,
//   description?: string,
//   onPress?: () => void,
//   isVisible: boolean,
//   leftToRightTransition?: boolean,
//   title: string,
// };

export default AlertButton = ({
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
        <TextIranSans style={[styles.buttonTitle, titleStyle]}>
          {title}
        </TextIranSans>
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
        <TextIranSans style={styles.title}>{title}</TextIranSans>
        <TextIranSans style={styles.description}>{description}</TextIranSans>
        <View style={styles.buttonsContainer}>
          {buttons
            ? buttons.map(button => _renderButton(button))
            : _renderButton({onPress, title: 'باشه'})}
        </View>
      </View>
    </Modal>
  );
};

AlertButton.defaultProps = {
  title: 'خطای ورود اطلاعات',
};
