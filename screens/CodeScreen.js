import React,{useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Platform, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {Headline} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';


const CodeScreen = ({route}) => {
    const email = route.params.email;
    console.log('email', email)
    const navigation = useNavigation();
  
//   const [data, setData] = React.useState({
//       email: '',
//   });


  const [code, setCode] = useState('')

//   const handlesubmit = async =>{
 
    


//       console.log('hhhhh', code)
//   }
  

  const fetchHandleSubmit = async newdata => {
      console.log('Codeeee', code)
      console.log('email Api', email)

  
    try {
    
      let response = await fetch('http://192.168.1.46:8000/api/password/checkCode', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: code,
            email: email
          })
      });

      let responseJson = await response.json();
      console.log('res', responseJson)
    //   let data = responseJson;
    //   console.log('Data', data);
    // //   navigation.navigate('ChangePas')
    
    } catch (error) {
      console.log('errors Code', error);
    }
  
  
  };


 

  return (
    <View style={styles.container}>
      <Text>{code}</Text>
      <Headline style={styles.titleStyle}>Code </Headline>
      <Input
        style={styles.textInput}
        placeholder="Code"
        onChangeText={val => setCode(val)}
      />


      <View style={styles.button} >
      <TouchableOpacity
        style={styles.signIn}
        onPress={() => {
            fetchHandleSubmit();
      
    
      
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