import React from 'react';
import { View, StyleSheet } from 'react-native';

// Footer component for the bottom section of the screen
const Footer = ({ children }) => {
  return <View style={styles.footer}>{children}</View>;
};

const styles = StyleSheet.create({
  footer: {
    flex: 1.4,
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default Footer;
