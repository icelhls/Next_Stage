import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import CodeScreen from './CodeScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import ChangePasswordScreen from './ChangePasswordScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="Forgot" component={ForgotPasswordScreen}/>
        <RootStack.Screen name="Code" component={CodeScreen}/>
        <RootStack.Screen name="ChangePas" component={ChangePasswordScreen}/>

        
    </RootStack.Navigator>
);

export default RootStackScreen;