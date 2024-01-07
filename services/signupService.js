import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './config';
import { Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const signupService = () => {
  const { signIn } = React.useContext(AuthContext);
  const auth = getAuth(app);

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);
      signIn(userCredential);
      // You may want to return the user or some indication of successful registration here.
      return user;
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error during signup', error.message);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  return {
    signup,
  };
};

export default signupService;
