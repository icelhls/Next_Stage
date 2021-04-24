import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Title from '../card/Title';
import Subtitle from '../card/Subtitle';
// import data from '../model/fakeData'
import data from '../assets/data';
import SmallCard from '../card/SmallCard';
import Blockcard from '../card/Blockcard';
const url = 'https://nextstageksa.com/cards/api/category/index';

export default function VerticalList({title}) {
  // const [items, setItems] = useState(data)
  const [data, setData] = useState({
    categories: '',
  });
  // const [categories, setCategories] = useState([])
  const navigation = useNavigation();
  console.log(navigation);

  const fetchCategories = async () => {
    try {
      let response = await fetch(url);
      let categories = await response.json();
      // console.log('responseCategpries--', responseJson)
      let data = categories.categories;
      console.log('ResponseJsonCategories', categories);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  // const displayPage = id => {
  //   switch (id) {
  //     default:
  //     case 1:
  //       return id ? navigation.navigate('MainSub', id) : null;
  //   }
  // };

  return (
    <>
      <Title>{title}</Title>
      {}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('MainSub', item.id)}>
            <SmallCard item={item} />
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </>
  );
}
const styles = StyleSheet.create({});
