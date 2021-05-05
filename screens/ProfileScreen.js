import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const url = 'https://nextstageksa.com/cards/api/user/profile'


const ProfileScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    name_en: '',
    name_ar: '',
    trade_name: '',
    phone: '',
    email: '',
    current: ''
  });

  const [image, setImage] = useState('');
  const [updateImage, setUpdateImage]= useState({
    image: '',
    ext: '',
  })

  const [data2, setData2] = React.useState({
    current: ''
  });

  const [data3, setData3] = useState({
    count: ''
  })

  const fetchUser = async () => {
    try {
      api_token = await AsyncStorage.getItem('api_token')
      let response = await fetch(
       url,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );
      let responseJson = await response.json();
      console.log('responseUserProfile--', responseJson.user);
      let data = responseJson.user
      console.log('Profile', {name_en: data.name_en, phone: data.phone})
      setData({
        name_en: data.name_en,
        name_ar: data.name_ar,
        trade_name: data.trade_name,
        phone: data.phone,
        email: data.email
      })
      // setData(data)
    } catch (error) {
      console.log(error);
    }
  };


  const fetchImage = async () => {
    try {
      api_token = await AsyncStorage.getItem('api_token')
      let response = await fetch(
       url,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );
      let responseJson = await response.json();
      console.log('responseUserProfile--', responseJson.user);
      let image = responseJson.user.image
      console.log('image profiel', image)
      // let updateImage = responseJson.user
      // console.log('image profile%%%%%%%', {image: updateImage.image})
      // setUpdateImage({
      //   image: updateImage.image,
      //   ext: 'image/jpg'
      // })

      setImage(image)
      // setData(data)
    } catch (error) {
      console.log(error);
    }
  };



 // wallet 
 const fetchWallet = async () => {
  try {
    api_token = await AsyncStorage.getItem('api_token');
    let response = await fetch(
      'http://nextstageksa.com/cards/api/wallet/index',
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
    let data2 = responseJson.wallet;
    console.log('Wallet---', {current: data2.current, recent: data2.recent});
    setData2({
      current: data2.current,
   
    });
  } catch (error) {
    console.log(error);
  }
};

// Orders.
const fetchOrders = async () => {
  try {
    api_token = await AsyncStorage.getItem('api_token');
    let response = await fetch(
      'http://nextstageksa.com/cards/api/orders/count',
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
    console.log('responseOrdersCount--', responseJson);
    let data3 = responseJson
    setData3({
      count: data3.count
    })
    // let data2 = responseJson.wallet;
    // console.log('Wallet---', {current: data2.current, recent: data2.recent});
    // setData2({
    //   current: data2.current,
   
    // });
  } catch (error) {
    console.log(error);
  }
};



  useEffect(() => {
    fetchUser();
    fetchWallet()
    fetchOrders()
    fetchImage()
  }, []);
  return (
    <>
     <SafeAreaView  style={styles.container}>
       <ScrollView> 
         
       <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar
            // source={require('../assets/images/profile.jpg')}
            source={{
              uri: image
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              {data.name_en}
            </Title>
            <Caption style={styles.caption}>{data.trade_name}</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Amman, Jordan</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>+962{data.phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
             {data.email}
          </Text>
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
          <Title>{data2.current} JD</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>{data3.count}</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="podium" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Rank</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => navigation.navigate('Purchase')}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Purchase</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name="printer-settings" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>print</Text>
          </View>
        </TouchableRipple> */}
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => navigation.navigate('Settings')}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>

       </ScrollView>
     
    </SafeAreaView >
    </>
   
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
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
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
