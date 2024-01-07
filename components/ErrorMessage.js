import React from "react";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { globalStyles } from "../styles/globalStyles";

const ErrorMessage = ({ errorText }) => (
  <Animatable.Text
    animation="fadeInLeft"
    duration={1000}
    style={globalStyles.errorText}
  >
    <Ionicons size={hp("2%")} name="close-circle-outline" />
    {errorText}
  </Animatable.Text>
);

export default ErrorMessage;
