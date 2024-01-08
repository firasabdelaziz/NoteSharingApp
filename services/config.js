import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbpFQBpazHKkfakE5rUgFgOLQXJC1rkBg',
  authDomain: 'notesharingapp-356b0.firebaseapp.com',
  projectId: 'notesharingapp-356b0',
  storageBucket: 'notesharingapp-356b0.appspot.com',
  messagingSenderId: '255827994636',
  appId: '1:255827994636:web:31616211bba6c3c3d12629',
  measurementId: 'G-4ZRSBKMRMZ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// Initialize firestore ( database )
const db = getFirestore(app);

// Initialize the authentication module
const auth = getAuth(app);

export { db, app, auth };
