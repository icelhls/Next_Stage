import React from 'react';
import { View, Text, Button, StyleSheet, Image  } from 'react-native';
import MainSubCard  from '../card/MainSubCard'
import Title from '../card/Title'
import { Card, ListItem, Icon } from 'react-native-elements'

const CardDetailsScreen = ({route}) => {
  const name_en = route.params;
  const image = route.params
  console.log('images', image)

    return (
      <>
      <View style={styles.container}>
     
     {/* <MainSubCard>
       <Title>{name_en}</Title>

     </MainSubCard> */}
    <Card>
  <Card.Title>{name_en}</Card.Title>
  <Card.Divider/>
  <Image
            style={styles.image}
            resizeMode="cover"
            
            source={{ uri: `https://nextstageksa.com/cards/storage/uploades/${image}`, height: 90, width: 80 }}
            
          />

  
  

      
  
</Card>



      </View>
      </>
    );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start'
    
  },
});
