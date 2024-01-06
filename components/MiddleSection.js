import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// MiddleSection component for displaying introductory text
const MiddleSection = ({ style, title, description,additionalDescription  }) => {
  return (
    <View style={[styles.mid, style]}>
      <Text style={styles.midTextf}>{title}</Text>
      {description && <Text style={styles.midTexts}>{description}</Text>}
      {additionalDescription &&<Text style={styles.midTexts}>{additionalDescription}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default MiddleSection;
