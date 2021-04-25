import React from 'react';
import { StyleSheet, View,  Dimensions } from 'react-native';

const {width} =  Dimensions.get('window')
const {height} =  Dimensions.get('window')

export default function SubCateCard(props) {
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
    backgroundColor: '#b22222',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    borderTopLeftRadius: 45,
    borderBottomRightRadius: 30,
    width: width / 2.5,
    // marginRight: 5,
    height: height/4.,
    marginLeft: 22

  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  }
});