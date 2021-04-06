import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity, FlatList, ScrollView,SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {globalStyles} from '../styles/global'
// import Blockcard from '../card/Blockcard'
import FeaturedNews from '../card/FeaturedNews'
import SmallCard from '../card/SmallCard'
import HorizalList from '../screens/HorizalList'
import VerticalList  from '../screens/VerticalList'


const HomeScreen = ({navigation}) => {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        {/* <Text style={{color: colors.text}}>Home Screen</Text> */}
        
      {/* <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      /> */}
       <FeaturedNews item ={{
         id: '1',
         title: 'This is the title no one.',
         desc:
           'Desc is the short form of description and this format is the actual same as our real database.',
         thumbnail: 'https://picsum.photos/seed/picsum/200/300',
       }} />
       {/* <SmallCard /> */}
       <HorizalList />
       <VerticalList />
      
       {/* <HorizalList /> */}
     
    

       {/* <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', item)}>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )} /> */}
      </ScrollView>
      </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
