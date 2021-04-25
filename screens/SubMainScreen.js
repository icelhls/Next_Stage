import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, ScrollView,FlatList, TouchableOpacity } from 'react-native';
import { Card, ListItem,  Icon } from 'react-native-elements'

// const url = 'http://nextstageksa.com/cards/api/sub/byMainId'
const SubMainScreen = ({route, }) => {
    const [subcategories, setCategories]= useState([])
    const id = route.params;


    const fetchCategories = async () => {

          try {
      let data = {
        id: id,
      };
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
          console.log('responseSubCategories--', responseJson)
          let subcategories =  responseJson.subcategories
          setCategories(subcategories)
        //   console.log('ResponseJsonCategories', categories);
        //   setData(data);
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
        {/* <Text>Bookmark Screen</Text> */}

        {/* <Card>
  <Card.Title>hhhh</Card.Title>
  <Card.Divider/>
  {
    subcategories.map((u, i) => {
        const {image, name_en, name_ar} = u
      return (
        <View key={i} >
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: `https://nextstageksa.com/cards/storage/uploades/${image}`, height: 90, width: 80 }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card> */}

<FlatList
            data={subcategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
             
              <TouchableOpacity
                onPress={() => console.log('you clicked subcategories')}>
                {/* <MainSubCard>
                  <View
                    style={{
                      margin: 18,
                      marginTop: 40,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    <Title>{item.name_ar }</Title>
                    <Title>{item.name_en}</Title>
                  </View>
                </MainSubCard> */}
                <Card>
  {/* <Card.Title>CARD WITH DIVIDER</Card.Title> */}
  {/* <Card.Divider/> */}
  
  
 
 
        <View style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: `https://nextstageksa.com/cards/storage/uploades/${item.image}` }}
          />
        
        </View>
    
   <Card.Title>Order Now</Card.Title>
</Card >


              </TouchableOpacity>
            )}
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
    justifyContent: 'center'
  },
  image: {
    width: 110,
    height: 140
  }
});