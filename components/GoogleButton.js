import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Button component for reusable pressable buttons
const GoogleButton = ({ onPress, text, style }) => {
  return (
    <Pressable style={[globalStyles.googleButton, style]} onPress={onPress}>
      <Text style={globalStyles.googleButtonText}>{text}</Text>
      <Ionicons color="#002863" size={hp('2.5%')} name="logo-google" />
    </Pressable>
  );
};

export default GoogleButton;
