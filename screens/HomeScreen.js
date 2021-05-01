import React, {useState, useEffect} from 'react';
import {View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import VerticalList from '../components/VerticalList';
// import CartItem from '../screens/CartItem';
import CartItem from '../components/CartItem'
import Pendings from '../components/Pendings'
import {
  Title,
  Caption,
  TouchableRipple,
  Headline,
  Text,
} from 'react-native-paper';
import StyleSheet from 'react-native-media-query';
import {Image} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = () => {
  const [data, setData] = useState({
    current: '',
  })

  const fetchWallet = async () => {
    try {
      api_token = await AsyncStorage.getItem('api_token')
      let response = await fetch(
       'https://nextstageksa.com/cards/api/wallet/index',
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
      console.log('responseWallet--', responseJson);
      let data = responseJson.wallet
      console.log('Wallet---', {current: data.current, recent: data.recent})
      setData({
        current: data.current,
     
        
      })
  
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWallet();
  }, []);


    const navigation = useNavigation();
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <>
      <View style={styles.sizeMedia}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <StatusBar
              barStyle={theme.dark ? 'light-content' : 'dark-content'}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              {/* <Image
                source={require('../assets/images/profile.jpg')}
                style={{
                  width: wp('50%'),
                  height: hp('25%'),
                  margin: 10,
                  marginBottom: 30,
                  flex: 1,
                }}
              /> */}
               <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#7e102c',
                  margin: 10,
                  width: 180,
                  marginBottom: 30,
                  elevation: 1,
                  // borderTopLeftRadius: 50,
                  // borderBottomRightRadius: 50,
                  elevation: 2,
                   shadowOffset: {width: 1, height: 1},
                }}>
                  {/* ORDERS*/}
                {/* <Caption style={{fontSize: 15, color: '#fff', marginLeft: 10}}>
                  Current Balance
                </Caption> */}
                <TouchableOpacity onPress={()=> navigation.navigate('Purchase')}>
                <Title style={{fontSize: 25, color: '#fff', marginLeft: 10, alignSelf: 'center'}}>
                  Orders
                </Title>

                </TouchableOpacity>
              
              </View>
            {/* price*/}
            <TouchableOpacity  onPress={()=> navigation.navigate('Purchase')}>
            <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#7e102c',
                  margin: 10,
                  width: 180,
                  marginBottom: 30,
                  // borderTopLeftRadius: 50,
                  // borderBottomRightRadius: 50,
                  elevation: 2,
                   shadowOffset: {width: 1, height: 1},
                }}>
                
                <Caption style={{fontSize: 15, color: '#fff', marginLeft: 10, alignSelf: 'center'}}>
                  Current Balance
                </Caption>
                <Title style={{fontSize: 16, color: '#fff', marginLeft: 10,  alignSelf: 'center'}}>
                  {data.current} JD 
                </Title>
              </View>
              
            </TouchableOpacity>

            </View>
              <Headline
              style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
              -كل الباقات-
            </Headline>
            <VerticalList />
            <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 20}}>
              -عروض اليوم-
            </Headline>
            <CartItem />
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
    justifyContent: 'center',
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
    margin: 15,
  },
  infoBox: {
    // width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeMedia: {
    '@media (max-width: 700px)': {
      backgroundColor: 'blue',
    },
  },
  imageStyle: {},
});
