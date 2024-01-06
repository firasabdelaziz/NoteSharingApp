// components/LoginScreen.js
import React, { useState, useMemo } from "react";
import { View, StyleSheet, TextInput, Keyboard, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/globalStyles";
import GlobalView from "../components/GlobalView";
import Header from "../components/Header";
import MiddleSection from "../components/MiddleSection";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function LoginScreen() {
  const navigation = useNavigation();

  // Keyboard handling
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const showSubscription = useMemo(
    () =>
      Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus(true);
      }),
    []
  );

  const hideSubscription = useMemo(
    () =>
      Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus(false);
      }),
    []
  );

  useMemo(() => {
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [showSubscription, hideSubscription]);

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      scrollEnabled={keyboardStatus}
    >
      <GlobalView>
        <Header />
        <MiddleSection
          style={{ flex: 0.2, paddingBottom: 40, }}
          title="Login with As"
        />
        <Footer>

          <TextInput
            style={styles.input}
            placeholder="Login"
          />

          <TextInput
            style={globalStyles.inputText}
            placeholder="Password"
            secureTextEntry
          />

          <Button
            onPress={() => {
              // Implement login logic here
              navigation.navigate("Home"); // Navigate to the home screen upon successful login
            }}
            text="Login"
          />
        </Footer>
      </GlobalView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "85%",
    height: 45,
    borderWidth: 1,
    borderColor: "#0185da",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

});
