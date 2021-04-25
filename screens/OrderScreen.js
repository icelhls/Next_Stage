import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
const url = 'https://nextstageksa.com/cards/api/category/index';
// const url = 'https://nextstageksa.com/cards/api/orders/myOrders' //orders empty
import SubCateCard from '../card/SubCateCard';
import Title from '../card/Title';

const OrderScreen = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      // console.log('responseCategpries--', responseJson)
      let orders = responseJson.categories;
      console.log('ResponseJsonOrders', orders);
      // setCategories(categories)
      setOrders(orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <FlatList
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
        />
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
