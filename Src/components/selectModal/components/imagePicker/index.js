import ImagePicker from 'react-native-image-crop-picker';
import React, {Component} from 'react';
import {View, Button} from 'react-native';
class index extends Component {
  imageload() {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log(images);
    });
  }
  render() {
    return (
      <View>
        <Button onPress={() => this.imageload()}>Click me</Button>
      </View>
    );
  }
}

export default index;
