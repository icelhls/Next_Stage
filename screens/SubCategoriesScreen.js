import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import {useNavigation} from '@react-navigation/native';
const SubCategoriesScreen = ({route}) => {
  const [subcategories, setCategories] = useState([]);
  const id = route.params;
  const navigation = useNavigation();

  const fetchCategories = async () => {
    try {
      let data = {
        id: id,
      };
      console.log('data subCategories', data);
      let response = await fetch(
        `http://nextstageksa.com/cards/api/sub/byMainId`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data),
        },
      );
      let responseJson = await response.json();

      console.log('responseSubCategories--', responseJson);
      let subcategories = responseJson.subcategories;
      setCategories(subcategories);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => {
    const type = item.category.type === 1;
    console.log('Type', type);
    if (type === true) {
      return (
        <TouchableOpacity
          onPress={
            type ? () => navigation.navigate('Order', {id: item.id}) : null
          }>
          <Card>
            <Card.Title style={{fontSize: 11, color: '#a52a2a'}}>
              {item.name_en}
            </Card.Title>
            <Card.Divider />

            <View style={styles.user}>
              <Image
                style={styles.image}
                resizeMode="center"
                source={{
                  uri: `https://nextstageksa.com/cards/storage/uploades/${
                    item.image
                  }`,
                }}
              />
            </View>
            <Card.Title style={{color: 'green'}}>{item.price} JD</Card.Title>
            <Card.Title>Order Now</Card.Title>
          </Card>
        </TouchableOpacity>
      );
    } else if (type === false) {
      return (
        <TouchableOpacity onPress={() => submitOrder1({item})}>
          <Card>
            <Card.Title style={{fontSize: 11, color: '#a52a2a'}}>
              {item.name_en}
            </Card.Title>
            <Card.Divider />

            <View style={styles.user}>
              <Image
                style={styles.image}
                // resizeMode="cover"
                source={{
                  uri: `https://nextstageksa.com/cards/storage/uploades/${
                    item.image
                  }`,
                }}
              />
            </View>
            <Card.Title style={{color: 'green'}}>{item.price} JD</Card.Title>

            {item.count ? (
              <Card.Title>Buy Now</Card.Title>
            ) : (
              <Card.Title>Not found</Card.Title>
            )}
          </Card>
        </TouchableOpacity>
      );
    }
  };

  const submitOrder1 = ({item}) => {
    if (item.count) {
      // call API
      console.log('TRIX', item.id);
      submitOrder2({item});
    } else {
      alert('Not found');
    }
  };

  const submitOrder2 = async ({item}) => {
    try {
      const api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(
        `http://192.168.1.46:8000/api/orders/orderNow`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: item.id,
          }),
        },
      );
      let responseJson = await response.json();
      alert(responseJson.message1);
      console.log('response', responseJson);
      navigation.navigate('Purchase');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={subcategories}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SubCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // image: {
  //   width: 110,
  //   height: 145,
  // },
  image: {
    width: 120,
    height: 161,
    margin: 10,
    borderBottomWidth: 1,
    resizeMode: 'cover',
  },
});
