import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        {/* <Text>Bookmark Screen</Text> */}
        <Button
          title="Go Home"
          color='#7e102c'
          onPress={() => navigation.goBack()}
        />
      </View>
    );

 

    
};






export default OrderScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
