import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Header component for displaying the logo
const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logoImage} source={require('../assets/images/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
  },
});

export default Header;
