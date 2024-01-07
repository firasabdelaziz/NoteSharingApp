import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

// Button component for reusable pressable buttons
const Button = ({ onPress, text, style }) => {
  return (
    <Pressable style={[globalStyles.button, style]} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
