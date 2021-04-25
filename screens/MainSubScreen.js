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
  Image
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import MainSubCard from '../card/MainSubCard';
import SubCateCard from '../card/SubCateCard'
import Title from '../card/Title';

const MainSubScreen = ({route}) => {
  const [mainsubs, setMainsubs] = useState([])
  const [subCategories, setCategories] = useState([])

  const navigation = useNavigation();
  const id = route.params;

  const fetchMainSub = async () => {
    try {
      let data = {
        category_id: id,
      };
      let response = await fetch(
        `https://nextstageksa.com/cards/api/mainsub/index`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data),
        },
      );

      let responseJson = await response.json();
      // let subCategories = await response.json()

      console.log('responseJson', responseJson)
      if(mainsubs || subCategories){

        let mainsubs = responseJson.mainsubs
        let subCategories =  responseJson.subCategories;
        console.log('mainsubs', mainsubs)
        console.log('subCategories', subCategories)
        setCategories(subCategories)
        setMainsubs(mainsubs)
      
        // setMainsubs(mainsubs)
        // return navigation.navigate('Profile')

      }else {
        let subCategories =  responseJson.subCategories;
        console.log('subCategories', subCategories)
        setCategories(subCategories)
      
 

      } 
    } catch (error) {
      console.log('  Wrong response', error);
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
                onPress={() => navigation.navigate('SubMain', item.id )}>
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
            data={subCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={()=> console.log('you clicked submain cards')}>
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
                    {/* <Title>{item.name_en}</Title> */}
                  </View>
                </SubCateCard>
              </TouchableOpacity>
            )}
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
