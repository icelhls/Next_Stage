import React from 'react';
import { StyleSheet, View,  Dimensions } from 'react-native';

const {width} =  Dimensions.get('window')
const {height} =  Dimensions.get('window')

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#7e102c',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    borderTopLeftRadius: 45,
    borderBottomRightRadius: 30,
    width: width / 2.2,
    // marginRight: 5,
    height: height/3.,
    marginLeft: 10

  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    margin: 25
  }
});