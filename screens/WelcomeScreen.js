import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import GlobalView from "../components/GlobalView";
import Header from "../components/Header";
import MiddleSection from "../components/MiddleSection";
import Footer from "../components/Footer";
import Button from "../components/Button";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  // Function to handle navigation to the login screen
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  // Function to handle navigation to the create account screen
  const handleCreateAccount = () => {
    navigation.navigate("Register");
  };

  return (
    <GlobalView>
      <Header />
      <MiddleSection
        title="let's get started"
        description="With Planning Poker, estimating your"
        additionalDescription="projects is easier than ever before."
      />
      <Footer>
        {/* Login Button */}
        <Button onPress={handleLogin} text="Login" />

        {/* Create Account Button */}
        <Button
          onPress={handleCreateAccount}
          text="Create account"
          style={{
            marginTop: 7,
            borderWidth: wp("0.2%"),
            borderColor: "#0185da",
            backgroundColor: null,
          }}
        />
      </Footer>
    </GlobalView>
  );
};

export default WelcomeScreen;
