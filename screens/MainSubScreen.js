import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import MainSubCard from '../card/MainSubCard';
import SubCateCard from '../card/SubCateCard';
import Title from '../card/Title';

const MainSubScreen = ({route}) => {
  const [mainsubs, setMainsubs] = useState([]);
  const [subs, setSubs] = useState([]);

  const navigation = useNavigation();
  const id = route.params;

  const fetchMainSub = async () => {
    try {
      const api_token = await AsyncStorage.getItem('api_token');
      let data = {
        category_id: id,
      };
      let response = await fetch(
        `https://nextstageksa.com/cards/api/mainsub/index`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      let responseJson = await response.json();

      console.log('responseJson', responseJson);

      if (mainsubs || subs) {
        let mainsubs = responseJson.mainsubs;
        let subs = responseJson.subs;
        console.log('mainsubs', mainsubs);
        console.log('subs@@', subs);

        setSubs(subs);
        setMainsubs(mainsubs);
      }
    } catch (error) {
      console.log('  Wrong response', error);
    }
  };


const renderItemSubs = ({item}) => {
  const type = item.type === 1;
  console.log('Type', type);
  if (type === true) {
    return (
      <TouchableOpacity
        onPress={
          type ? () => navigation.navigate('Order', {id: item.id}) : null
        }>
        <Card>
        <Card.Title style={{fontSize: 11}}>{item.name_en}</Card.Title>
          <Card.Divider/>

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

          <Card.Title>Order Now</Card.Title>
        </Card>
      </TouchableOpacity>
    );
  } else if (type === false) {
    return (
      <TouchableOpacity onPress={() => alert('Buy Now')}>
        <Card>
          {/* <Card.Divider/> */}

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
          {/* <Card.Title style={{color: 'green'}}>{item.price} $</Card.Title> */}
          <Card.Title>Buy Now</Card.Title>
        </Card>
      </TouchableOpacity>
    );
  }
};
  

  useEffect(() => {
    fetchMainSub();
  }, []);

  

  return (
    <>
      <View>
        <SafeAreaView>
          <ScrollView>
            <FlatList
              data={mainsubs}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('SubCategories', item.id)}>
                  <MainSubCard>
                    <View
                      style={{
                        margin: 18,
                        marginTop: 1,
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={styles.imageMainCard}
                        // resizeMode="cover"
                        source={{
                          uri: `https://nextstageksa.com/cards/storage/uploades/${
                            item.image
                          }`,
                        }}
                      />
                      {/* <Title>{item.name_ar }</Title> */}
                      <Title>{item.name_en}</Title>
                    </View>
                  </MainSubCard>
                </TouchableOpacity>
              )}
              numColumns={2}
            />

            <FlatList
              data={subs}
              keyExtractor={item => item.id}
              renderItem={renderItemSubs}
              numColumns={2}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default MainSubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 161,
    margin: 10,
    borderBottomWidth: 1,
    resizeMode: "center"


  },
  imageMainCard: {
    width: 110,
    height: 145,
    margin: 10,
    borderBottomWidth: 1,
    resizeMode: "center"
  },
});
