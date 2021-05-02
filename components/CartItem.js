import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image,  } from 'react-native';
import Title from '../card/Title';
import Card from '../card/Card'

import AsyncStorage from '@react-native-community/async-storage';
export default function CartItem() {

  const [data, setData] = useState([])

  const fetchOffer = async () => {
    try {
      api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(
        'https://nextstageksa.com/cards/api/offer/today',
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
      console.log('responseOfferToday--', responseJson);
      let data = responseJson.offers;
  
      console.log('Ofers Today', data)
      setData(data)
    } catch (error) {
      console.log(error);
    }
  };


  
  const renderItem =({item})=> {
    return <Card>
      <Title>{item.new_price} JD</Title>
           <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                          uri: `http://nextstageksa.com/cards/storage/uploades/${
                           item.sub_category.image
                          }`,
                        }}
                      />
      <Title>{item.sub_category.name_en}</Title>

    </Card>

  }

  useEffect(() => {
    fetchOffer()

  }, []);
  
  return (
    <>
    <View>
    
        < FlatList
         data={data}
         keyExtractor ={item => item.id}
         renderItem = {renderItem}
         horizontal
         showsHorizontalScrollIndicator ={false}
         />
      
    </View>

     
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 93,
    margin: 10,
    borderBottomWidth: 1,
    marginTop: 1
  

  },
});