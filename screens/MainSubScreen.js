import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


import MainSubCard from '../card/MainSubCard'

const MainSubScreen = () => {
    return (
      <View style={styles.container}>
        {/* <Text>Main categories</Text> */}
        {/* <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        /> */}
       <View style={{flexDirection: 'row', marginTop: 10}}>
       <MainSubCard />
        <MainSubCard />

       </View>
       <MainSubCard />
       
       


      </View>
    );
};

export default MainSubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});