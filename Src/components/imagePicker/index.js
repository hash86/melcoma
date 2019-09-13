import ImagePicker from 'react-native-image-crop-picker';
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';
import styles from './style';
import Colors from 'MelcomA/src/constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import TextIranSans from 'MelcomA/src/constants/IranSans';

class index extends Component {
  state = {
    imagesSource: null,
    imageNum: 0,
  };

  imageFromGallery() {
    ImagePicker.openPicker({
      multiple: true,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      avoidEmptySpaceAroundImage: true,
      includeBase64: true,
    }).then(images => {
      // let source = {uri: images[0].path};
      this.setState({imagesSource: images});

      //console.log(images);
    });
  }

  imageFromCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      freeStyleCropEnabled: true,
      includeBase64: true,
    }).then(image => {
      // console.log('image :', image);
      // let source = {uri: image.path};
      let imagesSource = [...this.state.imagesSource];
      // console.log('imagesSource.length :', imagesSource.length);
      let img = {...imagesSource[0]};
      img = image;
      imagesSource[imagesSource.length] = img;
      this.setState({imagesSource});

      // console.log('source :', source);

      // console.log(this.state.ImageSource);
    });
  }

  deleteImageFromArray() {
    console.log('index :', 0);
    // let imagesSource = [...this.state.imagesSource];
    // imagesSource.splice(index, 1);
    // this.setState({imagesSource});

    // this.mediaPrinter(imagesSource);
  }

  mediaPrinter(array) {
    return array.map(function(images, index) {
      // don't put your key as index, choose other unique values as your key.
      return (
        <View>
          <Image key={index} source={{uri: images.path}} style={styles.Image} />

          <AntDesign
            style={styles.deleteButton}
            color={Colors.red}
            name="delete"
            size={19}
            onPress={() => alert('this.deleteImageFromArray')}
          />
        </View>
      );
    });
  }
  render() {
    let i = 0;
    const {imagesSource, imageNum} = this.state;
    return (
      <View style={styles.Container}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.Button}
            rounded
            success
            onPress={() => this.imageFromGallery()}>
            <TextIranSans> گالری</TextIranSans>

            <AntDesign color={Colors.blue} name="folder1" size={19} />
          </Button>
          <Button
            style={styles.Button}
            rounded
            success
            onPress={() => this.imageFromCamera()}>
            <TextIranSans> دوربین</TextIranSans>

            <AntDesign color={Colors.blue} name="camera" size={19} />
          </Button>
        </View>

        {imagesSource != null && (
          <View style={styles.imageContainer}>
            {this.mediaPrinter(imagesSource)}
          </View>
        )}
        {/*
         */}
      </View>
    );
  }
}

export default index;
