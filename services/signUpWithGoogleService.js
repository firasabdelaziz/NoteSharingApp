import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import * as Google from 'expo-auth-session/providers/google';

const signUpWithGoogleService = () => {
  const { signIn } = React.useContext(AuthContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '255827994636-t3ch2q9ucuddnllco66bb2srdnt8kpco.apps.googleusercontent.com',
    webClientId: '255827994636-1o3bp02vn8osidit3luuainuvpgllv9j.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      signIn(response);
    }
  }, [response, signIn]);

  const signUpWithGoogle = async () => {
    try {
      promptAsync();
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error during login', error.message);
      throw error; // Rethrow the error to handle it in the LoginScreen component
    }
  };

  return {
    signUpWithGoogle,
  };
};

export default signUpWithGoogleService;
