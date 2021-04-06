import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Drawer
} from 'react-native-paper';
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
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
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
              UserName
            </Title>
            <Caption style={styles.caption}>@username</Caption>
          </View>
        </View>
      </View>
    



      <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => navigation.navigate('Profile')}>
          <View style={styles.menuItem}>
            <Icon name="ios-person" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Profile</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="podium" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="podium" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Purchase</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="podium" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Term and Conditions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="podium" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Privacy and Policy</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Purchase</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name="printer-settings" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Contact Us</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
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
