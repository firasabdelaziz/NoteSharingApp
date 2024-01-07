import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

// Header component for displaying the logo
const Header = () => {
  return (
    <View style={globalStyles.header}>
      <Image style={globalStyles.logoImage} source={require('../assets/images/logo.png')} />
    </View>
  );
};

export default Header;
