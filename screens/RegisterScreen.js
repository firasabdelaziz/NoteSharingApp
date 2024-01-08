import React, { useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Alert, TextInput } from "react-native";
import { Formik } from "formik";
import GlobalView from "../components/GlobalView";
import Header from "../components/Header";
import MiddleSection from "../components/MiddleSection";
import Footer from "../components/Footer";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";

import Password from "../components/Password";
import BackButton from "../components/BackButton";
import ErrorMessage from "../components/ErrorMessage";
import useKeyboardHandling from "../hooks/useKeyboardHandling";
import usePasswordToggle from "../hooks/usePasswordToggle";
import { globalStyles } from "../styles/globalStyles";
import ValidationFactory from "../validation/validationFactory";
import { useNavigation } from "@react-navigation/native";
import signupService from '../services/signupService';
import * as Google from 'expo-auth-session/providers/google';

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const keyboardStatus = useKeyboardHandling();
  const [showPassword, togglePassword] = usePasswordToggle();
  const validationSchema = ValidationFactory.createRegistrationForm();
  const signupFunctions=signupService();


  const handleSignup = async (email, password) => {
    try {
      const user = signupFunctions.signup(email, password);
      console.log(user);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '255827994636-t3ch2q9ucuddnllco66bb2srdnt8kpco.apps.googleusercontent.com',
    webClientId: '255827994636-1o3bp02vn8osidit3luuainuvpgllv9j.apps.googleusercontent.com',
  });

  const signUpWithGoogle = async () => {
    try {
      promptAsync();
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error during login', error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (response?.type === 'success') {
      console.log(response);
    }
  }, [response]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        handleSignup(values.email, values.password);
        actions.resetForm();
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          scrollEnabled={keyboardStatus}
        >
          <GlobalView>
            <BackButton callback={() => navigation.navigate("Welcome")} />
            <Header />
            {/** */}
            <MiddleSection
              style={{ flex: 0.2, paddingBottom: 40 }}
              title="Register with as"
            />
            <Footer>
              <TextInput
                style={globalStyles.inputText}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
              />
              {errors.email && touched.email && (
                <ErrorMessage errorText={errors.email} />
              )}
              <Password
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder={"Password"}
                showPassword={showPassword}
                togglePassword={togglePassword}
              />
              {errors.password && touched.password && (
                <ErrorMessage errorText={errors.password} />
              )}
              <Password
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                placeholder={"Confirm Password"}
                showPassword={showPassword}
                togglePassword={togglePassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorMessage errorText={errors.confirmPassword} />
              )}
              <Button
                onPress={() => {
                  console.log('here');

                  signUpWithGoogle()
              }}
                text="Register"
              />
              <GoogleButton
                onPress={() => {
                }}
                text="Register with google "
              />
            </Footer>  
          </GlobalView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
}
