import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import MainSubCard from '../card/MainSubCard';
import SubCateCard from '../card/SubCateCard'
import Title from '../card/Title';

const MainSubScreen = ({route}) => {
  // const [data, setData] = useState({
  //   mainsubs: '',
  //   subCategories: '',
  // });

  const [mainsubs, setMainsubs] = useState([])
  const [subCategories, setCategories] = useState([])
  // const [mainsubs, setMainsubs] = useState();
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
      // if(mainsubs){
      //   console.log('hhh mustaf mainsubsRESPONSE', mainsubs)

      // }else if(subCategories){
      //   console.log('subCategories', subCategories)

      // }


      

        // if(!empty(mainsubs.mainsubs)){
        //   console.log('ResponseJsonMainSub setData', data);
        // }else{
        //   console.log('ResponseJsonSub setData', data);
        // }

      // let mainsubs = await response.json();
      // // console.log('ResponseMainSub', mainsubs);
      // if(mainsubs){
      //   console.log('ResponseMainSub______', mainsubs);
      //   let data = mainsubs.mainsubs;
      //   setData(data);
      // }

      // let subCategories = await response.json()
      // if(subCategories){
      //   console.log('ResponseSubCategories______', subCategories);


      // }
      
     
     
      
      // setMainsubs(mainsubs);
    
    } catch (error) {
      console.log('  Wrong response', error);
    }
  };
  // const fetchSubCategories= async () => {
  //   try {
  //     let data1 = {
  //       category_id: id,
  //     };
  //     let response = await fetch(
  //       `https://nextstageksa.com/cards/api/mainsub/index`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json;charset=utf-8',
  //         },
  //         body: JSON.stringify(data1),
  //       },
  //     );
  //       // if(!empty(mainsubs.mainsubs)){
  //       //   console.log('ResponseJsonMainSub setData', data);
  //       // }else{
  //       //   console.log('ResponseJsonSub setData', data);
  //       // }
  //     let subCategories = await response.json();
  //     console.log('ResponseSubCategories', subCategories);
      
  //     let data = subCategories.subCategories;
     
      
  //     // setMainsubs(mainsubs);
  //     setData(data);
  //   } catch (error) {
  //     console.log('  Wrong response', error);
  //   }
  // };

  

  useEffect(() => {
    fetchMainSub();
    // fetchSubMain();
    // fetchSubCategories();
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
                onPress={() => navigation.navigate('CardDetails', item.id)}>
                <MainSubCard>
                  <View
                    style={{
                      margin: 18,
                      marginTop: 40,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    <Title>{item.name_ar}</Title>
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
                onPress={() => navigation.navigate('CardDetails', item.id)}>
                <SubCateCard>
                  <View
                    style={{
                      margin: 18,
                      marginTop: 40,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    <Title>{item.name_ar}</Title>
                    <Title>{item.name_en}</Title>
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
});
