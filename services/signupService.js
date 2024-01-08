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
      signIn(userCredential);
      return user;
    } catch (error) {
      Alert.alert('Error during signup', error.message);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  return {
    signup,
  };
};

export default signupService;
