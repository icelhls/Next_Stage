import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const OfferScreen = () => {
    const list = [
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description',
          price: 7
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Description'
        },
        {
          name: 'Title',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Description'
        },
    
      ]
        return (
          <View>
            {/* <Text>Details Screen</Text> */}
            {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
              <View style={{flexDirection: 'row', alignItems: 'space-around' }}>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle style={{alignSelf: 'flex-end', fontSize: 16, marginLeft: 200}}>   $50.0</ListItem.Subtitle>
              </View>
              
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
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
        );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
