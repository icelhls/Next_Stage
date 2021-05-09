import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// const url = 'https://nextstageksa.com/cards/api/category/index';
// const url = 'https://nextstageksa.com/cards/api/orders/myOrders' //orders empty
// const url = 'http://192.168.1.46:8000/api/orders/type'
import SubCateCard from '../card/SubCateCard';
import Title from '../card/Title';
import AsyncStorage from '@react-native-community/async-storage';

const OrderScreen = ({route}) => {

  const [orders, setOrders] = useState([]);
  const [screens, setScreens] = useState ({
    screen1: '',
    screen2: '',
    screen3: ''

  })
  const id = route.params;
  const navigation = useNavigation();
  // console.log('ID**** orderNow', id)
 

  // const fetchOrderNow = async () => {
  //   try {
  //     // let data = {
  //     //   id: id,
  //     // };
  //      console.log('ID**** orderNow', id)
  //       let data = {
  //         id: id
  //      }
  //      console.log('data id2', data.id)

   
  //     api_token = await AsyncStorage.getItem('api_token');
  //     let response = await fetch(
  //       `http://nextstageksa.com/cards/api/orders/type`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json;charset=utf-8',
  //         },
  //         body: JSON.stringify(data),
  //       },
  //     );

  //     let responseJson = await response.json();
  //     // let subCategories = await response.json()

  //     console.log('responseJsonOrderNow', responseJson)
  //     // if(mainsubs || subCategories){

  //     //   let mainsubs = responseJson.mainsubs
  //     //   let subCategories =  responseJson.subCategories;
  //     //   console.log('mainsubs', mainsubs)
  //     //   console.log('subCategories', subCategories)
  //     //   setCategories(subCategories)
  //     //   setMainsubs(mainsubs)
      
  //     //   // setMainsubs(mainsubs)
  //     //   // return navigation.navigate('Profile')

  //     // }else {
  //     //   let subCategories =  responseJson.subCategories;
  //     //   console.log('subCategories', subCategories)
  //     //   setCategories(subCategories)
      
 

  //     // } 
  //   } catch (error) {
  //     console.log('  Wrong response OrderNow', error);
  //   }
  // };


  const fetchCategories10 = async () => {
    try {
      let data = {
        id: id,
      };
      console.log('data submanin', data)
      const api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(
        `http://nextstageksa.com/cards/api/orders/chick`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      let responseJson = await response.json();

      console.log('responseOrderNowwww--', responseJson);
       let screen = responseJson.screen
       console.log('screen1', screen)
       if(screen === 1){
         return navigation.navigate('Pubg', {id: id})

       }else if(screen === 2){
         return navigation.navigate('PubgInt', {id: id})

       }else if(screen === 3){
         return navigation.navigate('FreeFire', {id: id})
       }else if(screen === 4){
         return navigation.navigate('Screen4',{id: id} )

       }else if(screen === 5){
         return navigation.navigate('Screen5', {id: id})

       }else{
         return navigation.navigate('Order', {id: id})
       }

      //  }else if(screen === 4){
      //    return navigation.navigate('')

      //  }
     
      // let subcategories = responseJson.subcategories;
      // setCategories(subcategories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories10();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={  ()=>navigation.navigate('Pubg', {id: id})}>
          <Text>Pubg</Text>

        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={()=>navigation.navigate('PubgInt', {id: id})}>
          <Text>Pubg International</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('FreeFire', {id: id})}>
          <Text>Free Fire</Text>
        </TouchableOpacity> */}



        {/* <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MainSub', item.id)}>
              <SubCateCard>
                <Title>{item.name_en}</Title>
              </SubCateCard>
            </TouchableOpacity>
          )}
          numColumns={2}
        /> */}
      </View>
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   buttonBack: {
  //     //   margin: 5,
  //       marginBottom: 20,

  //       backgroundColor: '#7e102c',
  //       fontSize: 20,

  //   }
});
