import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Title from '../card/Title'
import Subtitle from '../card/Subtitle'
// import data from '../model/fakeData'
import data from '../assets/data'
import SmallCard from '../card/SmallCard'
import Blockcard from '../card/Blockcard'
const url = 'https://nextstageksa.com/cards/api/category/index'

export default function VerticalList({title}) {
    // const [items, setItems] = useState(data)
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
  
      try {
        let response = await fetch(url)
        let  responseJson = await response.json()
        // console.log('yes hhahah', responseJson)
        let categories =  responseJson.categories
        console.log('ResponseJsonCategories', categories)
        setCategories(categories)
      } catch (error) {
  
        console.log(error)
      }
    }
    useEffect(() => {
      fetchCategories()
    }, [])

    return <>
    <Title>{title}</Title>
    <FlatList data = {categories}
    keyExtractor ={(item)=> item.id}
    renderItem = {({item})=> <SmallCard item ={item}/>}
    numColumns={2}
      />
      
    </>
}
const styles = StyleSheet.create({})