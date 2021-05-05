import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {globalStyles} from '../styles/global';
import {ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SmallCard from '../card/SmallCard';
import SubCateCard from '../card/SubCateCard';
import DiscountCard from '../card/DiscountCard'

const OfferScreen = () => {
  // const [data, setData] = useState({
  //   offers: ''
  // })
  const [data, setData] = useState([]);

  const fetchOffers = async () => {
    try {
      let response = await fetch(
        'https://nextstageksa.com/cards/api/offer/all',
      );
      // let offers = await response.json();
      let responseJson = await response.json();
      console.log('responseOffers--', responseJson);
      let data = await responseJson.offers;
      console.log('Offers All--', data);
      setData(data);
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
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Description',
      price: 7,
    },
    {
      name: 'Title',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Description',
    },
    {
      name: 'Title',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Description',
    },
    {
      name: 'Title',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Description',
    },
    {
      name: 'Title',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Description',
    },
    {
      name: 'Title',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Description',
    },
    {
      name: 'Title',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Description',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <ListItem  bottomDivider>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: `http://nextstageksa.com/cards/storage/uploades/${
              item.sub_category.image
            }`,
          }}
        />
        <ListItem.Content>
          <View style={{flexDirection: 'row', alignItems: 'space-around',}}>
            <ListItem.Title>{item.sub_category.name_en}</ListItem.Title>
            {/* <ListItem.Subtitle style={{alignSelf: 'flex-end', fontSize: 16, marginLeft: 10}}> {item.sub_category.price}JD</ListItem.Subtitle> */}
            <View>
              <ListItem.Subtitle
                style={{marginEnd: 5, color: 'green', fontSize: 22, marginLeft: 25}}>
                {item.new_price} JD
              </ListItem.Subtitle>
              <ListItem.Subtitle style={{marginLeft: 25}}>
                Available Now{' '}
              </ListItem.Subtitle>
              {/* <ListItem.Subtitle>{item.start_offer - item.end_offer} </ListItem.Subtitle> */}
            </View>
          </View>

          <ListItem.Subtitle style={{color: 'red', fontSize: 20}}>
            {item.sub_category.price} JD
          </ListItem.Subtitle>
        </ListItem.Content>
        
      </ListItem>
    );
  };
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
              renderItem={renderItem}
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
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 97,
    margin: 10,
    borderBottomWidth: 1,
    marginTop: 1,
  },
});
