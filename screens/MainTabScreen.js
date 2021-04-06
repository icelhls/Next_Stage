import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native-animatable';
import {useTheme, Avatar} from 'react-native-paper';
// import screen
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen'

import SettingsScreen from './SettingsScreen';


// Create Stack
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const SettingsStack = createStackNavigator()

// Create Tab Bottom
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#7e102c',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#7e102c',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#7e102c',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      /> */}
        <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#7e102c',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#7e102c',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
   
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#7e102c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#7e102c" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
         <HomeStack.Screen name="Profile" component={ProfileScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#7e102c" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        
        



</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#7e102c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Offers" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#7e102c" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);

// profile
// const ProfileStackScreen = ({navigation}) => {
//   const {colors} = useTheme();

//   return (
//     <ProfileStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.background,
//           shadowColor: colors.background, // iOS
//           elevation: 0, // Android
//         },
//         headerTintColor: colors.text,
//       }}>
//       <ProfileStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: '',
//           headerLeft: () => (
//             <View style={{marginLeft: 10}}>
//               <Icon.Button
//                 name="ios-menu"
//                 size={25}
//                 backgroundColor={colors.background}
//                 color={colors.text}
//                 onPress={() => navigation.openDrawer()}
//               />
//             </View>
//           ),
//           headerRight: () => (
//             <View style={{marginRight: 10}}>
//               <MaterialCommunityIcons.Button
//                 name="account-edit"
//                 size={25}
//                 backgroundColor={colors.background}
//                 color={colors.text}
//                 onPress={() => navigation.navigate('EditProfile')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name="EditProfile"
//         options={{
//           title: 'Edit Profile',
//         }}
//         component={EditProfileScreen}
//       />
//     </ProfileStack.Navigator>
//   );
// };


const ExploreStackScreen = ({navigation})=>(
  <ExploreStack.Navigator screenOptions ={{
    headerStyle: {
      backgroundColor: '#7e102c',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ExploreStack.Screen name="Recharge Account" component={ExploreScreen} options ={{
     headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#7e102c" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />

  </ExploreStack.Navigator>


);

const SettingsStackScreen = ({navigation})=>(
  <SettingsStack.Navigator screenOptions ={{
    headerStyle: {
      backgroundColor: '#7e102c',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ExploreStack.Screen name="Settings" component={SettingsScreen} options ={{
     headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#7e102c" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />

  </SettingsStack.Navigator>
)



  // const ExploreStackScreen = ({navigation})=>{
  //   <ExploreStack.Navigator screenOptions={{
  //     headerStyle: {
  //       backgroundColor: 'red'
  //     },
  //     headerTintColor: 'blue',
  //     headerTitleStyle: {
  //       fontSize: 'bold'
  //     }


  //   }}>


  //   </ExploreStack.Navigator>

  
  // }
  
 