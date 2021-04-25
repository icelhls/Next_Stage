import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Blockcard from '../card/Blockcard'

const {width} =  Dimensions.get('window')
const {height} =  Dimensions.get('window')

export default function SmallCard({item}) {
    
    return <Blockcard item={item} style = {styles.container} imageStyle ={styles.image}  />
    
    
}

const styles = StyleSheet.create({
    container: {
        width: width / 2.1,
        // marginRight: 5,
        height: height/4.,
        // margin: 5,
        justifyContent: 'space-around',
        marginLeft: 6,
        marginRight: 3.2,
        flex: 1,
        marginTop: 3,
        padding: 3,
        margin: 2.18,
        elevation: 1,
        shadowOffset: {width: 1, height: 1},
        margin: 8
        

    
        
    },
    image: {
        height: 150
    }
})
