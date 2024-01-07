import React from 'react'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { app } from "./config"; 
import { Alert } from 'react-native';


export const login = async (email,password) => {
    try {
        const auth = getAuth(app);
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        // User successfully registered
        const user = userCredential.user;
        console.log("User registered:", user);
        // You may want to return the user or some indication of successful login here.
        return user;
    } catch (error) {
        console.log("error:",error);
        Alert.alert(error);
        throw error; // Rethrow the error to handle it in the LoginScreen component
    }
}
