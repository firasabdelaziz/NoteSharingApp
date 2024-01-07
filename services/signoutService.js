import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./config";
import { Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";

const signoutService = () => {
  const { signOutContext } = React.useContext(AuthContext);
  const auth = getAuth(app);
  const signout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      signOutContext();
      // You can perform additional actions after signing out, if needed
    } catch (error) {
      console.log("Error:", error);
      Alert.alert("Error during sign-out", error.message);
      throw error; // Rethrow the error to handle it in the component
    }
  };
  return {
  signout,
  };
};

export default signoutService