import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Title from '../card/Title';
import Card from '../card/Card'

import AsyncStorage from '@react-native-community/async-storage';
export default function CartItem() {
  const [data, setData] = useState({
    current: '',
    recent: '',
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

  useEffect(() => {
    fetchOffer()

  }, []);
  
  return (
    <>
    <View>
      
    <FlatList
        data={data}
      //    keyExtractor={item => item.id}
      //   renderItem={({item}) =>(
      //     <Card>
      //       {/* <Title>{item}</Title> */}
      //     </Card>

      //   )
      //    }
      //  horizontal
      //   showsHorizontalScrollIndicator={false}
       /> 
      
    </View>

     
    </>
  );
}
const styles = StyleSheet.create({});