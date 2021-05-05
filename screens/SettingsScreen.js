import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
  Drawer
} from 'react-native-paper';

import { Avatar } from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
const url = 'https://nextstageksa.com/cards/api/user/profile'


import{ AuthContext } from '../components/context';
import { ScrollView } from 'react-native-gesture-handler';

const SettingsScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    name_en: '',
    trade_name: '',
    name_ar: ''
 
  });

  const [image, setImage] = useState('');


  const fetchSettings = async () => {
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
      console.log('responseSettings--', responseJson.user);
      let data = responseJson.user
      console.log('data', data)
      console.log('Profile', {name_en: data.name_en, phone: data.phone})
      setData({
        name_en: data.name_en,
        trade_name: data.trade_name,
      })
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSettings();
    fetchImage()
  }, []);

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
      console.log('responseUserSettings--', responseJson.user);
      let image = responseJson.user.image
      console.log('image Settings', image)
      setImage(image)
    } catch (error) {
      console.log(error);
    }
  };



  const { signOut } = React.useContext(AuthContext);
  return (
  
    <SafeAreaView  style={styles.container}>
      <ScrollView>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar
            // source={require('../assets/images/profile.jpg')}
            source ={{uri: image}}
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
    



      <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => navigation.navigate('Profile')}>
          <View style={styles.menuItem}>
            <Icon name="account-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>Profile</Text>
          </View>
        </TouchableRipple>
      {/* <TouchableRipple onPress={() => navigation.navigate('Change')}>
          <View style={styles.menuItem}>
            <Icon name="lock-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
        </TouchableRipple> */}
      <TouchableRipple onPress={() => navigation.navigate('Purchase')}>
          <View style={styles.menuItem}>
            <Icon name="cart-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>Purchase</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Term')}>
          <View style={styles.menuItem}>
            <Icon name="file-document-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>Term and Conditions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Privacy')}>
          <View style={styles.menuItem}>
            <Icon name="shield-lock-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>Privacy and Policy</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={()=>navigation.navigate('Contact')}>
          <View style={styles.menuItem}>
            <Icon name="email-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>Contact Us</Text>
          </View>
        </TouchableRipple> */}
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => navigation.navigate('About')}>
          <View style={styles.menuItem}>
            <Icon name="book-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="star-outline" color="#7e102c" size={30}/>
            <Text style={styles.menuItemText}>Rate Our App</Text>
          </View>
        </TouchableRipple>
        <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
      </View>
      </ScrollView>
     
    </SafeAreaView >

  );
};

export default SettingsScreen;

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
    fontSize: 18,
    lineHeight: 26,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
},

});
