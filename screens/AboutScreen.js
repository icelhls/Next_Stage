import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Headline,
  Paragraph,
} from 'react-native-paper';
const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Paragraph style={{fontSize: 20}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{' '}
      </Paragraph>
      {/* <Button title="go mainsub" onPress={()=>navigation.navigate('MainSub')} />
      <Button title="sub categories" onPress={()=>navigation.navigate('SubCategories')} /> */}

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
