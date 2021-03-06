import React, {useState, useEffect} from 'react';
import { StyleSheet,  View, FlatList } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
    Subheading,
    Headline,
    List,
  
    // Button,
  } from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';

export default function Completed() {
    const [data, setData] = useState({
        sub_category: ''
      });

      const fetchComplete = async () => {
        try {
          api_token = await AsyncStorage.getItem('api_token');
          let response = await fetch(
            'http://nextstageksa.com/cards/api/orders/completed',
            {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + api_token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            },
          );
          let responseJson = await response.json();
          console.log('responseComplete--///', responseJson);
          let data = responseJson.my_orders;
          console.log('pending*******', data);
          setData(data)
  
        } catch (error) {
          console.log(error);
        }
      };
      const renderItem =({item})=>{
     
        let title = item.sub_category.name_en
        let price = item.sub_category.price       
  return (<List.Section>
  <View style={{flexDirection: 'row'}}>
    <Title>{title}</Title>
    <Title style={{marginLeft: 210}}>{price} JD</Title>
</View>
</List.Section>)
    }


      useEffect(() => {
        fetchComplete();
      }, []);



    
    return (
        <View>
         <Headline style={{fontSize: 20, color: 'blue' }}>Completed</Headline>
       
       <FlatList
        data ={data}
        keyExtractor ={(item)=> item.id }
        renderItem ={renderItem}
        />

    </View>
    )
}

const styles = StyleSheet.create({})
