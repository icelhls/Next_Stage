import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Title from '../card/Title';
// import Subtitle from '../card/Subtitle'
import data from '../assets/data';
import SmallCard from '../card/SmallCard';
import { ScrollView } from 'react-native-gesture-handler';
export default function CartItem({title}) {
  const [items, setItems] = useState(data);
  console.log('mustafa dataaa', items);

  return (
    <>
    <ScrollView>
    <Title>{title}</Title>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SmallCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </ScrollView>
    
    </>
  );
}
const styles = StyleSheet.create({});
