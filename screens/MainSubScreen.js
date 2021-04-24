import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MainSubCard from '../card/MainSubCard';
import Title from '../card/Title';

const MainSubScreen = ({route}) => {
  const [data, setData] = useState({
    mainsubs: '',
  })
  // const [mainsubs, setMainsubs] = useState();
  const navigation = useNavigation();
  const id = route.params;

  const fetchMainSub = async () => {
    try {
      let data1 = {
        category_id: id,
      };
      let response = await fetch(
        `https://nextstageksa.com/cards/api/mainsub/index`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data1),
        },
      );

      let mainsubs = await response.json();
      console.log('ResponseMainSub', mainsubs);
      let data = mainsubs.mainsubs;
      console.log('ResponseJsonMainSub setData', data);
      // setMainsubs(mainsubs);
      setData(data)
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
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CardDetails', item.id)}>
                <MainSubCard>
                  <View style={{margin: 18, marginTop: 40, alignSelf: 'center', justifyContent: 'center',  }}>
                    <Title>{item.name_ar}</Title>
                    <Title>{item.name_en}</Title>
                  </View>
                </MainSubCard>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
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
