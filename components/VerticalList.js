import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Title from '../card/Title';
import Subtitle from '../card/Subtitle';
// import data from '../model/fakeData'
import data from '../assets/data';
import SmallCard from '../card/SmallCard';
import Blockcard from '../card/Blockcard';
const url = 'https://nextstageksa.com/cards/api/category/index';
import Card from '../card/Card'



export default function VerticalList({title}) {

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



  return (
    <>
      <Title>{title}</Title>
      {}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('MainSub', item.id)}>    
           <Card>
           <View
                    style={{
                      margin: 18,
                      marginTop: 1,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                          <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                          uri: `http://nextstageksa.com/cards/storage/uploades/${
                            item.image
                          }`,
                        }}
                      />
                    {/* <Title>{item.name_ar }</Title> */}
                    <Title>{item.name_ar}</Title>
                    <Title>{item.name_en}</Title>
                  </View>
             

           </Card>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
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
