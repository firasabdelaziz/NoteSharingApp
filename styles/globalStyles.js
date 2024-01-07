import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
  container: {
    height: hp('100%'),
    flexDirection: 'column',
  },
  button: {
    width: "85%",
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0185da",
  },
  buttonText: {
    fontFamily: "Poppins-Medium",
    fontSize: hp("2%"),
    color: "#000000",
  },
  inputText: {
    width: "85%",
    height: 45,
    borderWidth: 1,
    borderColor: "#0185da",
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  errorText: {
    alignSelf: "flex-start",
    marginLeft: 32,
    bottom: 14,
    color: "#E34242",
  },
  passwordView: {
    flexDirection: "row",
  },
  showHidePasswordContainer: {
    position: "absolute",
    right: 10, // Adjust as needed for proper spacing
    height: "80%",
    justifyContent: "center",
  },
  showHidePassword: {
    height: 20,
  },
  backButton: {
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 15,
  },
  footer:{
    flex: 1.4,
    alignItems: 'center',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
  },
  mid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midTextf: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp('5%'),
    color: '#000000',
    paddingHorizontal: 12,
  },
  midTexts: {
    fontFamily: 'Poppins-Regular',
    fontSize: hp('2.5%'),
    color: '#000000',
  },
  googleButton:{
    flexDirection:"row",
    justifyContent:'center',
    position: 'absolute', 
    bottom: 10
  },
  googleButtonText:{
    fontFamily:'Poppins-Medium',
    fontSize:hp('2%'),
    color:'#002863',
  }
});
