import React from 'react';
import { StyleSheet, View,  Dimensions } from 'react-native';
import TitleDiscount from '../card/TitleDiscount'

const {width} =  Dimensions.get('window')
const {height} =  Dimensions.get('window')

export default function DiscountCard(props) {
  return (
    <View style={styles.card}>
      
          <TitleDiscount>X</TitleDiscount>

        { props.children }
    
    </View>
  );
}

const styles = StyleSheet.create({
  card: {

    // elevation: 3,
    // backgroundColor: '#b22222',
   
    // shadowColor: '#333',
    // shadowOpacity: 0.3,

   
   
   
    // width: width / 2.5,
    // // marginRight: 5,
    height: height/4.,
    // marginLeft: 22,
    // marginTop: 1
    

  },
 
});