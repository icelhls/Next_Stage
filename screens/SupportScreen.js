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

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Paragraph style={{fontSize: 20}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{' '}
      </Paragraph>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});
