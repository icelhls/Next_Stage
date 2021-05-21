import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// const url = 'https://nextstageksa.com/cards/api/category/index';
// const url = 'http://192.168.1.46:8000/api/orders/type'
// const url = `http://nextstageksa.com/cards/api/orders/chick` // order api server
import SubCateCard from '../card/SubCateCard';
import Title from '../card/Title';
import AsyncStorage from '@react-native-community/async-storage';

const OrderScreen = ({route}) => {
  const [orders, setOrders] = useState([]);

  const id = route.params.id;

  const navigation = useNavigation();

  const fetchOrderScreens = async () => {
    const api_token = await AsyncStorage.getItem('api_token');
    console.log('chrvll', id);
    let response1 = await fetch(
      // `http://192.168.1.46:8000/api/orders/orderNow`,
      // change to Server 
       `https://nextstageksa.com/cards/api/orders/orderNow`, 
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + api_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id}),
      },
    );
    console.log('dsfs', response1);
    let responseJson = await response1.json();
    console.log('OrderById@@@@@', responseJson.order.id);
    console.log('OrderById@@@@@2222', responseJson);
    let id2 = responseJson.order.id;
    console.log('id2', id2);

    try {
      const api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(
        // `http://192.168.1.46:8000/api/orders/type`,
         // Change to server
          `https://nextstageksa.com/cards/api/orders/type`,

         {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + api_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      console.log('id2@@@@@@@', id2);
      let responseJson = await response.json();

      let screen = responseJson.screen;
      console.log('screen4444', screen);
      if (screen === 1) {
        return navigation.navigate('Screen5', {id2: id2});
      } else if (screen === 2) {
        return navigation.navigate('PubgInt', {id2: id2});
      } else if (screen === 3) {
        return navigation.navigate('FreeFire', {id2: id2});
      } else if (screen === 4) {
        return navigation.navigate('Screen4', {id2: id2});
      } else if (screen === 5) {
        return navigation.navigate('Pubg', {id2: id2});
      } else if (screen === 0) {
        return navigation.navigate('Purchase', {id2: id2});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderScreens();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={  ()=>navigation.navigate('Pubg', {id: id})}>
          <Text>Pubg</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('PubgInt', {id: id})}>
          <Text>Pubg International</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('FreeFire', {id: id})}>
          <Text>Free Fire</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen4', {id: id})}>
          <Text>Screen 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('pubg', {id: id})}>
          <Text>Screen 5</Text>
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
