import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { globalStyles } from '../styles/globalStyles';

const Password = ({ value, onChangeText, showPassword, togglePassword,placeholder }) => {
  return (
    <View style={globalStyles.passwordView}>
      <TextInput
        style={globalStyles.inputText}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      <View style={globalStyles.showHidePasswordContainer}>
        <Pressable style={globalStyles.showHidePassword} onPress={togglePassword}>
          {showPassword ? (
            <Ionicons color="grey" size={hp('2.5%')} name="eye-outline" />
          ) : (
            <Ionicons color="grey" size={hp('2.5%')} name="eye-off-outline" />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Password;
