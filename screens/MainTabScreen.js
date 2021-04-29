import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native-animatable';
import {useTheme, Avatar} from 'react-native-paper';
// import screen
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import RechargeScreen from './RechargeScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import SettingsScreen from './SettingsScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import PurchaseScreen from './PurchaseScreen';
import TermScreen from './TermScreen';
import PrivacyScreen from './PrivacyScreen';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import OfferScreen from './OfferScreen';
import SupportScreen from './SupportScreen';
import MainSubScreen from './MainSubScreen';
import SubCategoriesScreen from './SubCategoriesScreen';
import PaymentScreen from './PaymentScreen';
import OrderScreen from './OrderScreen'
import CardDetailsScreen from './CardDetailsScreen'
import SubMainScreen from './SubMainScreen'


// Create Stack
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RechargeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const OfferStack = createStackNavigator();

// Create Tab Bottom
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#7e102c',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Offer"
      component={OfferStackScreen}
      options={{
        tabBarLabel: 'Offers',
        tabBarColor: '#7e102c',
        tabBarIcon: ({color}) => (
          <Icon name="decagram-outline" color={color} size={26} />
        ),
      
      }}
    />
    <Tab.Screen
      name="Recharge"
      component={RechargeStackScreen}
      options={{
        tabBarLabel: 'Recharge',
        tabBarColor: '#7e102c',
        tabBarIcon: ({color}) => (
          <Icon name="card-bulleted" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={SettingsStackScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: '#7e102c',
        tabBarIcon: ({color}) => (
          <Icon name="settings-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7e102c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor="#7e102c"
              // color={colors.text}
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        ),
      }}
    />
    <HomeStack.Screen
      name="Change"
      component={ChangePasswordScreen}
      options={{
        title: 'Change Password',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

    <HomeStack.Screen
      name="Purchase"
      component={PurchaseScreen}
      options={{
        title: 'My Orders',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

<HomeStack.Screen
      name="Payment"
      component={PaymentScreen}
      options={{
        title: 'Payment Method',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />



    <HomeStack.Screen
      name="Term"
      component={TermScreen}
      options={{
        title: 'Term & Condition',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="Privacy"
      component={PrivacyScreen}
      options={{
        title: 'Privacy & Policy',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        title: 'Contact Us',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="About"
      component={AboutScreen}
      options={{
        title: 'About Us',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

<HomeStack.Screen
      name="MainSub"
      component={MainSubScreen}
      options={{
        title: 'Cards',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

<HomeStack.Screen
      name="SubMain"
      component={SubMainScreen}
      options={{
        title: 'Card Details',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

<HomeStack.Screen
      name="SubCategories"
      component={SubCategoriesScreen}
      options={{
        title: 'Sub Categories',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

<HomeStack.Screen
      name="Order"
      component={OrderScreen}
      options={{
        title: 'Orders',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

<HomeStack.Screen
      name="CardDetails"
      component={CardDetailsScreen}
      options={{
        title: 'Card Details',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),

        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

<HomeStack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        title: 'Edit Profile',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),

        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />



  </HomeStack.Navigator>
);
const SettingsStackScreen = ({navigation}) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7e102c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
  </SettingsStack.Navigator>
);


const OfferStackScreen = ({navigation}) => (
  <OfferStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7e102c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <OfferStack.Screen
      name="Offers"
      component={OfferScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
  </OfferStack.Navigator>
);

// const DetailsStackScreen = ({navigation}) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#7e102c',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <DetailsStack.Screen
//       name="Details"
//       component={DetailsScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="menu"
//             size={25}
//             backgroundColor="#7e102c"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//   </DetailsStack.Navigator>
// );


const RechargeStackScreen = ({navigation}) => (
  <RechargeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7e102c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <RechargeStack.Screen
      name="Recharge Account"
      component={RechargeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="chevron-left"
            size={25}
            backgroundColor="#7e102c"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
  </RechargeStack.Navigator>
);






