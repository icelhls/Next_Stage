import React,{useState} from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ChangePasswordScreen = ({route}) => {
  const code = route.params.code;
  console.log('code@ change password', code)
  const navigation = useNavigation();

  const [new_password, setNewPassword] = useState('')
  
  const fetchHandleSubmit = async newdata => {
    //   console.log('Codeeee', code)
    //   console.log('email Api', email)

    try {
      let response = await fetch(
        'http://192.168.1.46:8000/api/password/chaingPassword',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: code,
            new_password: new_password,
          }),
        },
      );

      let responseJson = await response.json();
      console.log('res@changed Password', responseJson);
      navigation.navigate('SignInScreen')
      
  
    } catch (error) {
      console.log('errors changes', error);
    }
  };


  return (
    <View style={styles.container}>
      {/* <Text>{new_password}</Text> */}
      <Headline style={styles.titleStyle}>Change Password</Headline>
      <Input
        style={styles.textInput}
        placeholder="New Password"
        secureTextEntry={true}
        onChangeText={val => setNewPassword(val)}
      />
      {/* <Input
        style={styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
      /> */}

      <Button
        color="#7e102c"
        title="CHANGE PASSWORD"
        onPress={() => fetchHandleSubmit() }
      />
    </View>
  );
};

export default ChangePasswordScreen;

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
});
