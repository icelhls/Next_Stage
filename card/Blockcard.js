import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Title from '../card/Title';
import Subtitle from '../card/Subtitle';

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
        {/* <Title > Some title</Title> */}
        <Title>{title}</Title>
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
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
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
