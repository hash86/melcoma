import React from 'react';
import Colors from 'MelcomA/src/constants/Colors';
import {View, Image, StyleSheet} from 'react-native';
import TextIranSans from 'MelcomA/src/constants/IranSans';

export default ({focused, badge, source}) => {
  return (
    <View style={styles.container}>
      <View>
        {badge && (
          <View style={styles.badge}>
            <TextIranSans style={styles.badgeText}>{badge}</TextIranSans>
          </View>
        )}
        <Image style={styles.icon} source={source} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.grey,
    height: 18,
    justifyContent: 'center',
    position: 'absolute',
    right: -14,
    top: -1,
    width: 18,
    zIndex: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    height: 21,
    marginTop: 5,
    resizeMode: 'contain',
    width: 21,
  },
});
