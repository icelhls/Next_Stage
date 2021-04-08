import React from 'react';
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


import{ AuthContext } from '../components/context';
import { ScrollView } from 'react-native-gesture-handler';

const SettingsScreen = ({navigation}) => {

  const { signOut } = React.useContext(AuthContext);
  return (
  
    <SafeAreaView  style={styles.container}>
      <ScrollView>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar
            source={require('../assets/images/profile.jpg')}
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
              UserName
            </Title>
            <Caption style={styles.caption}>@username</Caption>
          </View>
        </View>
      </View>
    



      <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => navigation.navigate('Profile')}>
          <View style={styles.menuItem}>
            <Icon name="account" color="#7e102c" size={25}/>
            <Text style={styles.menuItemText}>Profile</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Change')}>
          <View style={styles.menuItem}>
            <Icon name="lock" color="#7e102c" size={25}/>
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Purchase')}>
          <View style={styles.menuItem}>
            <Icon name="cart-outline" color="#7e102c" size={25}/>
            <Text style={styles.menuItemText}>Purchase</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={() => navigation.navigate('Term')}>
          <View style={styles.menuItem}>
            <Icon name="file-document-outline" color="#7e102c" size={25}/>
            <Text style={styles.menuItemText}>Term and Conditions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Privacy')}>
          <View style={styles.menuItem}>
            <Icon name="shield" color="#7e102c" size={25}/>
            <Text style={styles.menuItemText}>Privacy and Policy</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>navigation.navigate('Contact')}>
          <View style={styles.menuItem}>
            <Icon name="email" color="#7e102c" size={25}/>
            <Text style={styles.menuItemText}>Contact Us</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => navigation.navigate('About')}>
          <View style={styles.menuItem}>
            <Icon name="file-document-outline" color="#7e102c" size={25}/>
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="star" color="#7e102c" size={25}/>
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
    fontSize: 16,
    lineHeight: 26,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
},

});
