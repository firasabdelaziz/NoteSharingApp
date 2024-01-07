import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

// GlobalView component for wrapping the entire screen
const GlobalView = ({ children }) => {
  return <View style={globalStyles.container}>{children}</View>;
};



export default GlobalView;
