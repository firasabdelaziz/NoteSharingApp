import React from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// GlobalView component for wrapping the entire screen
const GlobalView = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    flexDirection: 'column',
  },
});

export default GlobalView;
