import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Title from '../card/Title';
const url = 'https://nextstageksa.com/cards/api/category/index';
import Card from '../card/Card';

export default function VerticalList({title}) {
  const [data, setData] = useState({
    categories: '',
  });

  const navigation = useNavigation();
  console.log(navigation);

  const fetchCategories = async () => {
    try {
      let response = await fetch(url);
      let categories = await response.json();
      console.log('responseCategpries--', categories)
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
    <View style={styles.container}>
    <Title>{title}</Title>
      {}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MainSub', item.id)}>
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
                 
                  source={{
                    uri: `http://nextstageksa.com/cards/storage/uploades/${
                      item.image
                    }`,
                  }}
                />
                {/* <Title>{item.name_ar }</Title> */}
                {/* <Title>{item.name_ar}</Title> */}
                <View style={{marginTop: 80}}>
                <Title >{item.name_en}</Title>

                </View>
                
              </View>
            </Card>
          </TouchableOpacity>
        )}
        numColumns={2}
      />

    </View>
    

    </>
  );
}
const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 60,
    margin: 10,
    borderBottomWidth: 1,
    resizeMode: "center"
  },
});
