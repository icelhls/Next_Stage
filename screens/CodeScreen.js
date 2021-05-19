import React,{useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Platform, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {Headline} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const CodeScreen = () => {
    const navigation = useNavigation();
  
  const [data, setData] = React.useState({
      email: '',
  });

  const [email, setEmail] = useState('')

  const callapi = async newdata => {

    if(email){
    try {
     
      let response = await fetch('http://192.168.1.46:8000/api/password/forgot', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: email
      });

      let responseJson = await response.json();
      let data = responseJson;
      console.log('Data', data);
      navigation.navigate('ChangePas')
    
    } catch (error) {
      console.log('errors profile', error);
    }
  }else{
    alert(' please write your email')
  }
  
  };


 


   


  const emailInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const forgotHandle = email => {
    if (data.email.length == 0) {
      Alert.alert('Wrong Input!', 'Phone field cannot be empty.', [
        {text: 'Okay'},
      ]);
      return;
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>Change password</Text> */}
      <Headline style={styles.titleStyle}>Codeeeeee</Headline>
      <Input
        style={styles.textInput}
        placeholder="  Email"
        onChangeText={val => setEmail(val)}
      />


      <View style={styles.button} >
      <TouchableOpacity
        style={styles.signIn}
        onPress={() => {
          callapi(data.email);
        }}>
        <LinearGradient colors={['#7e102c', '#7e102c']} style={styles.signIn}>
          <Text
            style={[
              styles.textSign,
              {
                color: '#fff',
              },
            ]}>
             Code
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      </View>
    </View>
  );
};
// const Stack = createStackNavigator();
// <Stack.Navigator>
//   <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
// </Stack.Navigator>

export default CodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    borderRadius: 10,
  },

  titleStyle: {
    marginBottom: 50,
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    margin: 18
},

  signIn: {
    width: 210,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
}
});