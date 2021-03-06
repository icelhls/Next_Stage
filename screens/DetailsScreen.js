import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsScreen = ({navigation}) => {
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'  }}>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Title style={{alignSelf: 'flex-end'}}>{l.price}</ListItem.Title>
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

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
