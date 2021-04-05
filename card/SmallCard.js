import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Blockcard from '../card/Blockcard'

const {width} =  Dimensions.get('window')

export default function SmallCard({item}) {
    
    return <Blockcard item={item} style = {styles.container} imageStyle ={styles.image}  />
    
    
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200,
        margin: 5
       
    },
    image: {
        height: 150
    }
})
