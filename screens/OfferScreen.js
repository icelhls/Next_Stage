import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import SmallCard from '../card/SmallCard'
import SubCateCard from '../card/SubCateCard'

const OfferScreen = () => {
  const [data, setData] = useState({
    offers: ''
  })

  const fetchOffers = async () => {
    try {
      let response = await fetch('https://nextstageksa.com/cards/api/offer/all');
      let offers = await response.json();
      console.log('responseOffers--', offers)
      let data = await offers.offers
      console.log('DataOffers--', data);
      setData(data)
     

     
      // setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOffers();
  }, []);





    const list = [
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description',
          price: 7
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description'
        },
    
      ]
        return (
          <>
          <SafeAreaView>
            <ScrollView>
            <View>
            {/* <Text>Details Screen</Text> */}
            {/* {
        data.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
              <View style={{flexDirection: 'row', alignItems: 'space-around' }}>
              <ListItem.Title>{l.new_price}</ListItem.Title>
              <ListItem.Subtitle style={{alignSelf: 'flex-end', fontSize: 16, marginLeft: 200}}>   $50.0</ListItem.Subtitle>
              </View>
              
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      } */}
    
    
    
            {/* <Button
                title="Go to details screen...again"
                onPress={() => navigation.push("Details")}
            /> */}
            {/* <Button
                title="Go to home"
                onPress={() => navigation.navigate("Home")}
            /> */}
            {/* <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            /> */}
                 <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('MainSub', item.id)}>
            <SubCateCard>
              <Text>
              {item.new_price}

              </Text>
             
            </SubCateCard>
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

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
