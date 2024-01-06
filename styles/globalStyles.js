import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    width: '85%',
    height: '20%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0185da',
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp('2%'),
    color: '#000000',
  },
  inputText:{
    width: "85%",
    height: 45,
    borderWidth: 1,
    borderColor: "#0185da",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

});
