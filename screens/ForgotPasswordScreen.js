import React,{useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Platform, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {Headline} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

const ForgotPasswordScreen = ({navigation}) => {

  
  const [data, setData] = React.useState({
      email: '',
  });

  const [email, setEmail] = useState('')
 

  const callapi = async newdata => {
    console.log('mustaf forget', data, email)


    if(email){
    try {
     
      let response = await fetch('http://192.168.1.46:8000/api/password/forgot', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      });

      let responseJson = await response.json();
      let data = responseJson;
      console.log('Data', data);
      if(data.email === 1){
        navigation.navigate('Code1', {email: email})
      }else{
        alert(' the email is not found ')
      }
    
    } catch (error) {
      console.log('errors profile', error);
    }
  }else{
    alert(' please write your email')
  }
  
  };




  return (
    <View style={styles.container}>
      <Headline style={styles.titleStyle}>Forget Password</Headline>
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
             Forget Password
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

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
