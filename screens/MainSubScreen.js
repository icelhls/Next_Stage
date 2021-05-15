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

const renderItemSubs = ({item})=>{
  const type = item.type === 1
  console.log('RenderItemSubs', type)
  return (
    <TouchableOpacity onPress={ type ? () => navigation.navigate('Order', item.id): null}>
                  <SubCateCard>
                    <View
                      style={{
                        margin: 10,
                        // marginTop: 40,
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                          uri: `https://nextstageksa.com/cards/storage/uploades/${
                            item.image
                          }`,
                        }}
                      />
                      <Title>{item.name_ar}</Title>
                 
                    </View>
                  </SubCateCard>
                </TouchableOpacity>

  )
}
  

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
                        style={styles.image}
                        resizeMode="cover"
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
    width: 100,
    height: 145,
    margin: 10,
    borderBottomWidth: 1,
  },
});
