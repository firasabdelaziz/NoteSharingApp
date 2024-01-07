import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { globalStyles } from '../styles/globalStyles';

// MiddleSection component for displaying introductory text
const MiddleSection = ({ style, title, description,additionalDescription  }) => {
  return (
    <View style={[globalStyles.mid, style]}>
      <Text style={globalStyles.midTextf}>{title}</Text>
      {description && <Text style={globalStyles.midTexts}>{description}</Text>}
      {additionalDescription &&<Text style={globalStyles.midTexts}>{additionalDescription}</Text>}
    </View>
  );
};


export default MiddleSection;
