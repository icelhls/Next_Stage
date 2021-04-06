import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        {/* <Text>Details Screen</Text> */}
        {/* <Text>{ navigation.getParam('title') }</Text>
      <Text>{ navigation.getParam('body') }</Text>
      <Text>{ navigation.getParam('rating') }</Text> */}



        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
