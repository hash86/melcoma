import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text> New Etate </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f0f'},
});

export default Home;
