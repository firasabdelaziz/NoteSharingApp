import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './config';
import { Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const loginService = () => {
  const { signIn } = React.useContext(AuthContext);
  const auth = getAuth(app);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      signIn(userCredential);
      return user;
    } catch (error) {
      Alert.alert('Error during login', error.message);
      throw error; // Rethrow the error to handle it in the LoginScreen component
    }
  };

  return {
    login,
  };
};

export default loginService;
