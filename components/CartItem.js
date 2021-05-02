import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Title from '../card/Title';
import Card from '../card/Card'

import AsyncStorage from '@react-native-community/async-storage';
export default function CartItem() {
  const [data, setData] = useState({
    sub_category: '',
  });

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
      console.log('offerss', data)
      setData(data)
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem =({item})=>{
    let new_price = item.new_price
    let image = item.sub_category.image
    let name_en = item.sub_category.name_en
    return ( <Card>
      <Title>{new_price} JD</Title>
      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                          uri: `http://nextstageksa.com/cards/storage/uploades/${
                           image
                          }`,
                        }}
                      />

    <Title>{name_en}</Title>
    </Card>)

  }

  useEffect(() => {
    fetchOffer()

  }, []);
  
  return (
    <>
    <View>
    
      
    <FlatList
        data={data}
       horizontal
        showsHorizontalScrollIndicator={false}
      keyExtractor ={item => item.id}
      renderItem={renderItem}
       /> 
      
    </View>

     
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 60,
    margin: 10,
    borderBottomWidth: 1,
  

  },
});