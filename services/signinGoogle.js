
import { GoogleSignin } from "@react-native-google-signin/google-signin";

// Configure Google Sign-In
GoogleSignin.configure({
  androidClientId: "255827994636-t3ch2q9ucuddnllco66bb2srdnt8kpco.apps.googleusercontent.com",
  webClientId: "255827994636-1o3bp02vn8osidit3luuainuvpgllv9j.apps.googleusercontent.com",
  iosClientId: "255827994636-t3ch2q9ucuddnllco66bb2srdnt8kpco.apps.googleusercontent.com",
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
