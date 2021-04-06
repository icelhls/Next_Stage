import React, { useState } from 'react';
import { View, Text, Button,  StatusBar, TouchableOpacity, FlatList, ScrollView,SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {globalStyles} from '../styles/global'
// import Blockcard from '../card/Blockcard'
import SmallCard from '../card/SmallCard'
import HorizalList from '../screens/HorizalList'
import VerticalList  from '../screens/VerticalList'
import CartItem from '../screens/CartItem'
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Headline
} from 'react-native-paper';
import StyleSheet from 'react-native-media-query';




const HomeScreen = ({navigation}) => {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <>
      <View style={styles.example}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        {/* <Text style={{color: colors.text}}>Home Screen</Text> */}
        
      {/* <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      /> */}
            <View style={styles.infoBoxWrapper}  >
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          
          <Avatar.Image
            rounded
            source={require('../assets/logo.png')}
            size={80}
            color= 'white'
            
         
             />
           

        </View>
        <View style={styles.infoBox}>
          <Title>50 JOD</Title>
          <Caption>Current Balance</Caption>
        </View>
      </View>
      <Headline style={{textAlign: 'center', fontSize: 30}}>-عروض اليوم-</Headline>

       {/* <SmallCard /> */}
       {/* <HorizalList /> */}
       <CartItem />
       <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>-كل الباقات-</Headline>

       
        

       <VerticalList />
      
       {/* <HorizalList /> */}
     
    

       {/* <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', item)}>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )} /> */}
      </ScrollView>
      </SafeAreaView>

      </View>

      </>
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
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 2,
    borderTopColor: '#dddddd',
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 100,
    margin: 15
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  example: {
    
  
    '@media (max-width: 700px)': {
        backgroundColor: 'blue',
    },
}



});
