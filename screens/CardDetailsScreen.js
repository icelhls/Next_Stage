import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CardDetailsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Card Details </Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
