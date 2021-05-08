import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

// const url = 'http://nextstageksa.com/cards/api/sub/byMainId'
const SubMainScreen = ({route}) => {
  const [subcategories, setCategories] = useState([]);
  const id = route.params;
  const navigation = useNavigation();


  const fetchCategories = async () => {
    try {
      let data = {
        id: id,
      };
      console.log('data submanin', data)
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
  
 
  const renderItem = ({item})=>{
    const type = item.category.type === 1
    console.log('Type', type)
 

    return(
   
      
      <TouchableOpacity
      onPress={ type ? () => navigation.navigate('Order', {id: item.id}): null}>
      <Card>
        {/* <Card.Divider/> */}

        <View style={styles.user}>
          <Image

            style={styles.image}
            resizeMode="cover"
            source={{
              uri: `https://nextstageksa.com/cards/storage/uploades/${
                item.image
              }`,
            }}
          />
        </View>

        <Card.Title>Order Now</Card.Title>
      </Card>
    </TouchableOpacity>

    )

  }


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

export default SubMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 145,
  },
});
