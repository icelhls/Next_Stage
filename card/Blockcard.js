import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Title from '../card/Title';
import Subtitle from '../card/Subtitle';
import Price from '../card/Price'

function Blockcard({style, imageStyle, item}) {
  const {title, desc, thumbnail} = item
  return (
    <View style={[styles.container, style]}>
      <Image
        // source={require('../assets/images/food-banner4.jpg')}
        source ={{uri: thumbnail}}
        style={[styles.image, imageStyle]}
      
      />
      <View style={styles.contentContainer}>
        <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Title>{title}</Title>
        <Price>Price: $ 10</Price>

        </View>
        {/* <Title > Some title</Title> */}
       
        {/* <Subtitle > Desccribtion</Subtitle> */}
        <Subtitle>{desc}</Subtitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    backgroundColor: '#87cefa',
    overflow: 'hidden',
    elevation: 2,
  
    
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
      padding: 5

  }
});

export default Blockcard;
