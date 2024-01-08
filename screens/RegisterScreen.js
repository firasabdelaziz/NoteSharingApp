import React, { useEffect, useMemo, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Alert, TextInput, Text } from "react-native";
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
import signupService from "../services/signupService";
import signInWithGoogle from "../services/signinGoogle"; 

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const keyboardStatus = useKeyboardHandling();
  const [showPassword, togglePassword] = usePasswordToggle();
  const validationSchema = ValidationFactory.createRegistrationForm();
  const signupFunctions = signupService();



  const signinwithgoogle = async () => {
    try {
      const user = await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };


  const handleSignup = async (email, password) => {
    try {
      const user = signupFunctions.signup(email, password);
    } catch (error) {
      Alert.alert(error);
    }
  };

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
            {/* Register Header */}
            <Header />
            {/* Register Title */}
            <MiddleSection
              style={{ flex: 0.2, paddingBottom: 40 }}
              title="Register with as"
            />
            {/* Register Form */}
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
                  console.log("here");

                  handleSubmit();
                }}
                text="Register"
              />

              <GoogleButton
                onPress={() => signinwithgoogle()}
                text="Register with google "
              />
            </Footer>
          </GlobalView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
}
