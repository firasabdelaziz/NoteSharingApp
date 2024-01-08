
import { GoogleSignin } from "@react-native-google-signin/google-signin";

// Configure Google Sign-In
GoogleSignin.configure({
  androidClientId: "your_android_client_id",
  webClientId: "your_web_client_id",
  iosClientId: "your_ios_client_id",
});

const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const user = await GoogleSignin.signIn();
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default signInWithGoogle;
