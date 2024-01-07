import React from 'react'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from "./config"; 
import { Alert } from 'react-native';

export const signup = async (email,password) => {
    try {
        const auth = getAuth(app);
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        // User successfully registered
        const user = userCredential.user;
        console.log("User registered:", user);
        return user;
    } catch (error) {
        console.log("error:",error);
        Alert.alert(error);
        throw error; // Rethrow the error to handle it in the LoginScreen component
    }
}
