import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainSubCard  from '../card/MainSubCard'
import Title from '../card/Title'

const CardDetailsScreen = ({route}) => {
  const id = route.params;

    return (
      <>
      <View style={styles.container}>
     
     <MainSubCard>
       <Title>{}</Title>

     </MainSubCard>


      </View>
      </>
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
