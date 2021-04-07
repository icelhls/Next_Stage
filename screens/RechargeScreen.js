import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Headline
} from 'react-native-paper';
const RechargeScreen = () => {
    return (
      <View style={styles.container}>
        <Headline>Current Balance</Headline>
        <Title>50.0 JD</Title>



    
        <Button
          color='#7e102c'
          title="RECHARGE"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default RechargeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
