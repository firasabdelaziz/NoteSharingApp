import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// Button component for reusable pressable buttons
const Button = ({ onPress, text, style }) => {
    console.log(style);
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '85%',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0185da',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp('2%'),
    color: '#000000',
  },
});

export default Button;
