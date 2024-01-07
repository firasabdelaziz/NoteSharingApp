import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../styles/globalStyles';

const BackButton = ({ callback }) => {
  return (
    <Pressable onPress={callback} style={globalStyles.backButton}>
      <MaterialIcons name="keyboard-arrow-left" size={30} color={'#03003A'} />
    </Pressable>
  );
};

export default BackButton;
