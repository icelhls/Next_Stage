import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

// import { useNavigation } from '@react-navigation/native';
import MainSubCard from '../card/MainSubCard';

const MainSubScreen = () => {
  const [mainsubs, setMainsubs] = useState();
  // const navigation = useNavigation();
  // console.log('hdhdhdhdhd', navigation)
  // const data = route.params

  const fetchMainSub = async () => {
    try {
      let data = {
        category_id: 16,

      };
      // let category_id = 16
      // let category_id = 16;
      let response = await fetch(
        `http://nextstageksa.com/cards/api/mainsub/index`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data),
        },
      );

      let responseJson = await response.json();
      console.log('ResponseMainSub', responseJson);
      // let mainsubs =  responseJson
      // console.log('ResponseJsonMainSub', mainsubs)
      // setMain_sub(main_sub)
      // setMainsubs()
    } catch (error) {
      console.log(' wronggggggg', error);
    }
  };
  useEffect(() => {
    fetchMainSub();
  }, []);

  return (
    <>
      <View>
        <SafeAreaView>
          {/* <FlatList data = {main_sub}
      keyExtractor ={(item)=> item.id}
      renderItem = {({item})=>(
        <TouchableOpacity onPress={()=>alert('ok')}>
           <MainSubCard>
             <Text>{item.name_en}</Text>
           </MainSubCard>
  
        </TouchableOpacity>
      )
      }
      numColumns={2}
        /> */}
          <Text>hi there </Text>
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
