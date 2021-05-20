import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
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
import { Button } from 'react-native';

export default function InvoiceOrder() {
  // const [data, setData] = useState({
  //     sub_category: ''
  //   });
  const [data, setData] = useState([]);

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
      console.log('responseInvoiceOrderId--///', responseJson);
      let data = responseJson.my_orders;
      console.log('data completed*******', data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };



  const renderItem = ({item}) => {
    let id = item.id;
    
    




    return (
      <List.Section>
        <View style={{flexDirection: 'row'}}>
          <Title>invoice@@@@@{id}</Title>
          {/* <Title style={{marginLeft: 210}}>invoice@@@{price} JD</Title> */}
        </View>
      </List.Section>
    );
  };

    // invoice api method post.
    const fetchdata = async(id)=>{
        console.log('you submitted', id)
              try {
        const api_token = await AsyncStorage.getItem('api_token');
        let response1 = await fetch('http://192.168.1.46:8000/api/invoice/index', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
            order_id: 194,
   
          }),
        });
  
        let responseJson1 = await response1.json();
  
        console.log('response api invoice', responseJson1);
      //   navigation.navigate('Purchase');
      } catch (error) {
        console.log('errors', error);
      }

    }

    const fechHandleSubmit =  ({item}) => {
        let id = item.id
        console.log('Item@@@@', id)
        fetchdata(id)
        
    //     // let id2 = item.id
    //     // console.log('order_id 22222', id2)
    //   try {
    //     //   console.log(' TTTTTTT ', order_id);
    //     //   console.log(' TTTTTTT ', exto);
    //     //   console.log(' TTTTTTT ', imageo);
    //     // console.log('TTTTTTT', nameo)
  
    //     //   console.log(' id ', id);
    //     //   console.log('id_2', id_2)
    //     const api_token = await AsyncStorage.getItem('api_token');
    //     let response1 = await fetch('http://192.168.1.46:8000/api/invoice/index', {
    //       method: 'POST',
    //       mode: 'no-cors',
    //       headers: {
    //         Authorization: 'Bearer ' + api_token,
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //       //   image: imageo,
    //       //   ext: exto,
    //         order_id: 194,
    //         // id: id,
    //         // id_2: id_2
    //       }),
    //     });
  
    //     let responseJson1 = await response1.json();
  
    //     console.log('response api invoice', responseJson1);
    //   //   navigation.navigate('Purchase');
    //   } catch (error) {
    //     console.log('errors Image', error);
    //   }
    };

  useEffect(() => {
    fetchComplete();
    // fechHandleSubmit();

  }, []);

  return (
    <View>
      <Headline style={{fontSize: 20, color: 'blue'}}>Completed</Headline>

      {/* <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      /> */}
         <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={fechHandleSubmit}
      />
      {/* <Button title="button" onPress={()=> fechHandleSubmit()} /> */}
      
    </View>
  );
}

const styles = StyleSheet.create({});
