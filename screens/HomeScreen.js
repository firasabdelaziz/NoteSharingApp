import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import signoutService from '../services/signoutService'; 

export default function HomeScreen() {

  const signoutFunctions = signoutService();

  const handleSignOut = () => {
    try {
      signoutFunctions.signout();
    } catch (error) {
      console.log("Error during sign-out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red', // Change the color as needed
    borderRadius: 5,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
