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
import MainSubCard from '../card/MainSubCard';
import Title from '../card/Title';

const SubCategoriesScreen = ({route}) => {
  const [subcategories, setSubcategories] = useState();
  // const navigation = useNavigation();
  const id = route.params;

  const fetchSubCategories = async () => {
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
      console.log('ResponseSubCategories', responseJson);
      let subcategories= responseJson.subcategories;
      console.log('ResponseJsonSubCategories', subcategories);
      // setMainsubs(mainsubs);
      setSubcategories(subcategories)

    } catch (error) {
      console.log('  Wrong response', error);
    }
  };
  useEffect(() => {
    fetchSubCategories ();
  }, []);


    return (
      <>
      <View>
        <SafeAreaView>
          <FlatList
            data={subcategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => console.log('you clicked mainsub')}>
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
    )
};

export default SubCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});