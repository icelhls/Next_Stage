import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Headline,
  Paragraph,
} from 'react-native-paper';

import dataPayment from '../assets/dataPayment'

import MainSubCard from '../card/MainSubCard';
const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Paragraph style={{fontSize: 20}}>
        تم إنشاء شركة رويال كاردز من أجل تقديم منتج ممتاز لعملائنا بسرعة وأمان
        وخالية من المتاعب. يتمتع فريقنا بسنوات من الخبرة في مجال التجارة
        الإلكترونية والتجارة الدولية وتصنيف رضا العملاء من فئة الخمس نجوم. .{' '}
      </Paragraph>

    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});
