import React from 'react';
import { View,  Button, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import { ListItem, Avatar, Card, Text} from 'react-native-elements'

import dataPayment from '../assets/dataPayment'
import { Title, Paragraph } from 'react-native-paper';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const PaymentScreen = () => {
    return (
        <>
        <SafeAreaView>
          <ScrollView>
          <View>
          {/* <Text>Details Screen</Text> */}
          {
      dataPayment.map((l, i) => (
        // <ListItem key={i} bottomDivider>
        //   {/* <Image source={{uri: l.img}} /> */}
        //   <ListItem.Content>
        //     <View style={{flexDirection: 'row', alignItems: 'space-around' }}>
        //     <ListItem.Title>{l.title}</ListItem.Title>
        //     <ListItem.Subtitle style={{alignSelf: 'flex-end', fontSize: 16, marginLeft: 200}}>{l.subTitle}</ListItem.Subtitle>
        //     </View>
            
        //     <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        //   </ListItem.Content>
        // </ListItem>
        // <Text style={styles.logo}>{l.img}</Text>
        <>
        {/* <View style={{padding: 4, margin: 6}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 35}}>
            
            <View style={styles.logo}>{l.img}</View>
           <Title>{l.title}</Title>

            </View>
        
        <Paragraph>{l.subTitle}</Paragraph>

        </View> */}

<Card>
  <Card.Title>{l.title}</Card.Title>
  <Card.Divider/>
  <Card.Image>{l.img}
    <Text style={{marginBottom: 10}}>
        {l.subTitle}
   
    </Text>
  
  </Card.Image>
</Card>
       
        </>

       

      ))
    }
  
  
  
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
   
        </View>
          </ScrollView>
          

        </SafeAreaView>
        </>
    );
};

export default PaymentScreen;
// const {height} = Dimensions.get("screen");
// const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo: {
    width: 25,
    height: 25,
  },
});
