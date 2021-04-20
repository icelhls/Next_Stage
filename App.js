/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {DrawerContent} from './screens/DrawerContent';
// Drawer
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

// Auth
import {AuthContext} from './components/context';

// Root of app
import RootStackScreen from './screens/RootStackScreen';

// login and register Storage token
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [api_tocken, setapi_tocken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    email: null,
    api_tocken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };
  // theme of app
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  // login reducer
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          api_tocken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.email,
          api_tocken: action.token,
          isLoading: false,
          password: action.password,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          api_tocken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          name_en: action.name_en,
          name_ar: action.name_ar,
          trade_name: action.trade_name,
          phone: action.phone,
          email: action.id,
          api_tocken: action.token,
          password: action.password,
          config_pass: action.config_pass,
          isLoading: false,
        };
    }
  };
  // App states
  // login state
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        try {
          let data = {
            email: email,
            password: password,
          };
          let response = await fetch(
            'https://nextstageksa.com/cards/api/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify(data),
            },
          );

          let responseJson = await response.json();
          // alert(responseJson.data.email);
          console.log('mustafa responseJson', responseJson.data);
          await AsyncStorage.setItem(
            'api_tocken',
            responseJson.data.api_tocken,
          );
          //           console.log(responseJson.data.email);
          //           console.log('api_tocken', responseJson.data.api_tocken);
          //           console.log('mustafaaajson', responseJson.data.email );
          dispatch({type: 'LOGIN', api_token: responseJson.data.api_tocken});
        } catch (error) {
          // alert('Please check your number or password')
          alert('Please check Phone or Password');
        }
      },

      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('api_token');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },

      signUp: async (
        name_en,
        name_ar,
        trade_name,
        phone,
        email,
        password,
        config_pass,
      ) => {
        // setapi_tocken('fgkj');
        // setIsLoading(false);

        try {
          let data = {
            name_en: name_en,
            name_ar: name_ar,
            trade_name: trade_name,
            phone: phone,
            email: email,
            password: password,
            config_pass: config_pass,
          };
          let response = await fetch(
            'https://nextstageksa.com/cards/api/register',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify(data),
            },
          );

          let responseJson = await response.json();
          // alert(responseJson.data.email);
          console.log('mustafa responseJson', responseJson);
          await AsyncStorage.setItem(
            'api_tocken',
            responseJson.data.api_tocken,
          );
          dispatch({type: 'REGISTER', api_token: responseJson.data.api_tocken});
        } catch (error) {
          console.log('not registered');
        }
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let api_tocken;
      api_tocken = null;
      // try {
      //   api_tocken = await AsyncStorage.getItem('api_tocken');
      // } catch(e) {
      //   console.log(e);
      // }
      // console.log('user token: ', api_tocken);
      dispatch({type: 'RETRIEVE_TOKEN', token: api_tocken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.api_tocken === null ? (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
