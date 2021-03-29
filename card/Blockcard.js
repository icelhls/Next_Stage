import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Title from '../card/Title';
import Subtitle from '../card/Subtitle';

function Blockcard() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/food-banner4.jpg')}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Title> some title</Title>
        <Subtitle> Desccribtion</Subtitle>
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
