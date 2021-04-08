import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../card/Title';
import Subtitle from '../card/Subtitle';
import Price from '../card/Price'
import {
  Avatar,
  Caption,
  TouchableRipple,
  Headline
} from 'react-native-paper';

function Blockcard({style, imageStyle, item}) {
  const {title, desc, thumbnail, icon} = item
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={()=>console.log('You clicked cart')}>
        {/* <Headline style={{textAlign: 'center', fontSize: 30}}>{icon}</Headline> */}
      <Image
        // source={require('../assets/images/food-banner4.jpg')}
        source ={{uri: thumbnail}}
        style={[styles.image, imageStyle]}
      
      />
      <View style={styles.contentContainer}>
     
        
        <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Title style={{textAlign: 'center'}}>{title}</Title>
      
        {/* <Price style={{top: 50, }}>{icon}</Price> */}
        </View>
        {/* <Title > Some title</Title> */}
       
        {/* <Subtitle > Desccribtion</Subtitle> */}
        {/* <Subtitle>{desc}</Subtitle> */}
      </View>

      </TouchableOpacity>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    // borderRadius: 10,
    backgroundColor: '#7e102c',
    overflow: 'hidden',
    elevation: 2,
    borderTopLeftRadius: 50,
    borderBottomRightRadius:50,
  
    
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
