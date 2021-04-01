import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Title from '../card/Title'
import Subtitle from '../card/Subtitle'
import data from '../model/fakeData'
import SmallCard from '../card/SmallCard'
import Blockcard from '../card/Blockcard'
export default function VerticalList({title}) {
    const [items, setItems] = useState(data)
    console.log('mustafa dataaa', items)
    // const renderItem =({item})=> (
    //     <Title>{item.title}</Title>
      
    // )
   
    return <>
    <Title>{title}</Title>
    <FlatList data = {data}
    keyExtractor ={(item)=> item.id}
    renderItem = {({item})=> <SmallCard item ={item}/>}
    numColumns={2}
    
    // showsHorizontalScrollIndicator = {false}
      />
      
    </>
}
const styles = StyleSheet.create({})