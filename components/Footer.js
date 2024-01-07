import React from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

// Footer component for the bottom section of the screen
const Footer = ({ children }) => {
  return <View style={globalStyles.footer}>{children}</View>;
};

export default Footer;
