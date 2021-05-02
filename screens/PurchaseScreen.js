import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Subheading,
  Headline,
  List,
  // Button,
} from 'react-native-paper';
import {ListItem} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Pendings from '../components/Pendings';
import Completed from '../components/Completed';
import { Button } from 'react-native';

const PurchaseScreen = () => {
  const [data, setData] = useState({
    current: '',
    recent: '',
  });

  const [data3, setData3] = useState({
    my_orders: '',
  });

  const [data4, setData4] = useState({
    index: true,
  });


  const [isPendings, setPendings] = useState(false)
  const [isCompleted, setCompleted] = useState(false)

  const toggleCompleted =()=>{
    setCompleted(!isCompleted)
}

const togglePendings = ()=>{
  setPendings(!isPendings)
}

  const fetchWallet = async () => {
    try {
      api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(
        'https://nextstageksa.com/cards/api/wallet/index',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      let responseJson = await response.json();
      console.log('responseWallet--', responseJson);
      let data = responseJson.wallet;
      console.log('Wallet---', {current: data.current, recent: data.recent});
      setData({
        current: data.current,
        recent: data.recent,
      });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchWallet();

  }, []);

  // const list = [
  //   {
  //     title: 'Orders Name',
  //     subTitle: 'Description.....',
  //     price: 50,
  //   },
  //   {
  //     title: 'Orders Name',
  //     subTitle: 'Description.....',
  //     price: 25,
  //   },
  //   {
  //     title: 'Orders Name',
  //     subTitle: 'description.....',
  //     price: 30,
  //   },
  //   {
  //     title: 'Orders Name',
  //     subTitle: 'Description.....',
  //     price: 15,
  //   },
  //   {
  //     title: 'Orders Name',
  //     subTitle: 'Description.....',
  //     price: 50,
  //   },
  //   {
  //     title: 'Orders Name',
  //     subTitle: 'description.....',
  //     price: 50,
  //   },
  // ];

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* <Headline>Purchases</Headline> */}
          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: '#dddddd',
                  borderRightWidth: 1,
                },
              ]}>
              <Title>{data.recent} JD </Title>
              <Caption>Recent Balance</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>{data.current} JD </Title>
              <Caption>Current Balance</Caption>
            </View>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: '#dddddd',
                  borderRightWidth: 1,
                },
              ]}>
              <TouchableOpacity onPress={() => togglePendings()}>
                <Title>Pending </Title>
                <Caption>Pending Orders</Caption>
              </TouchableOpacity>
            </View>
            <View style={styles.infoBox}>
              <TouchableOpacity onPress={() => toggleCompleted()}>
                <Title>Completed</Title>
              </TouchableOpacity>
            </View>
          </View>

          <Headline style={{fontSize: 25}}>Orders History</Headline>
          {/* <Subheading style={{alignSelf: 'flex-end'}}>price</Subheading> */}
          {/* <FlatList
            data={data3}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <>
                <List.Section>
                  <View style={{flexDirection: 'row'}}>
                    <Title>{item.title}</Title>
                    {/* <Title style={{marginLeft: 210}}>{item.price}</Title> */}
          {/* <Text style={{marginLeft: 210}}>{item.user_id} JD</Text> */}
          {/* </View> */}

          {/* <Subheading>{item.subTitle}</Subheading> */}
          {/* </List.Section> */}
          {/* </>
            )} */}
          {/* /> */}
           {isCompleted && (<Completed />)}
           {isPendings && (<Pendings />)}
       
  
        </ScrollView>
      </View>
    </>
  );
};

export default PurchaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
