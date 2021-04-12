import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Title from '../card/Title'
import Subtitle from '../card/Subtitle'
// import data from '../model/fakeData'
import data from '../assets/data'
import SmallCard from '../card/SmallCard'
import Blockcard from '../card/Blockcard'
export default function VerticalList({title}) {
    const [items, setItems] = useState(data)
    console.log('mustafa dataaa', items)
    return <>
    <Title>{title}</Title>
    <FlatList data = {data}
    keyExtractor ={(item)=> item.id}
    renderItem = {({item})=> <SmallCard item ={item}/>}
    numColumns={2}
      />
      
    </>
}
const styles = StyleSheet.create({})