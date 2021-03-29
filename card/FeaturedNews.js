import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Blockcard from '../card/Blockcard'

export default function FeaturedNews({item}) {
    return   <Blockcard item={item} style={{marginVertical: 15}} />    
};

const styles = StyleSheet.create({})
