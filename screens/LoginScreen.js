import React ,{useEffect, useMemo} from "react";
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
import loginService from "../services/loginService";
import signInWithGoogle from "../services/signinGoogle"; 

export default function LoginScreen() {
  const navigation = useNavigation();
  const keyboardStatus = useKeyboardHandling();
  const [showPassword, togglePassword] = usePasswordToggle();
  const validationSchema = ValidationFactory.createLoginForm();
  const loginFunctions=loginService();

  const handleSignIn = async (email, password) => {
    try {
      const user = loginFunctions.login(email, password);
    } catch (error) {
      Alert.alert(error);
    }
  };



  const signinwithgoogle = async () => {
    try {
      const user = await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        handleSignIn(values.email, values.password);
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
            {/* Login Header */}
            <Header />
            {/* Login Title */}
            <MiddleSection
              style={{ flex: 0.2, paddingBottom: 40 }}
              title="Login with as"
            />
            {/* Login Form */}
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
                placeholder={"Password"}
                onChangeText={handleChange("password")}
                showPassword={showPassword}
                togglePassword={togglePassword}
              />
              {errors.password && touched.password && (
                <ErrorMessage errorText={errors.password} />
              )}
              <Button
                onPress={() => {
                  handleSubmit();
                }}
                text="Login"
              />
              <GoogleButton onPress={() => signinwithgoogle()} text="Login with google " />
            </Footer>
          </GlobalView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
}
