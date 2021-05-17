import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {
  Title,
  Caption,
  TouchableRipple,
  Headline,
  Text,
} from 'react-native-paper';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function PubgKoreaScreen({route}) {
  const order_id = route.params.id2;
  console.log('order_id', order_id);
  
  const navigation = useNavigation();
  
  const [selectedValue, setSelectedValue] = useState('java');
  const [text, onChangeText] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const [data, setData] = React.useState({
    email: '',
    password: '',

    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textChange = val => {
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

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const submitOrder = async newData => {
    console.log('fetch order_id', order_id);
    console.log('newdata fetch', newData);

    try {
      const api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(`http://192.168.1.46:8000/api/info/add`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + api_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: order_id,
          email: newData.email,
          password: newData.password,
        }),
      });
      let responseJson = await response.json();
      console.log('response', responseJson);
       navigation.navigate('Purchase');
    


    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (data.email.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Facebook or Password fields cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }
    // navigation.navigate('Purchase');
    console.log('submit id@@@', order_id);

    let newData = {
      email: data.email,
      password: data.password,
    };
    console.log('newData', newData);
    submitOrder(newData);
    navigation.navigate('Purchase');
    console.log('you submit  Pubg screen1');
  };

  useEffect(() => {
    submitOrder();
  }, []);

  return (
    <View>
      <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
        -Order Details-
      </Headline>
      <Headline style={{textAlign: 'center', fontSize: 20, marginTop: 30}}>
        - Facebook account or player Email (required) -
      </Headline>
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Facebook" value="facebook" />
        <Picker.Item label="Player Email" value="email" />
      </Picker>
      <TextInput
        placeholder="Facebook Or Player Email"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={val => textChange(val)}
      />
      {/* <Headline style={{textAlign: 'center', fontSize: 20, marginTop: 30}}>
        - Password (required) -
      </Headline> */}

      <TextInput
        placeholder=" Password (required)"
        secureTextEntry={data.secureTextEntry ? true : false}
        style={styles.input}
        autoCapitalize="none"
        onChangeText={val => handlePasswordChange(val)}
      />

      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => handleSubmit(data.email, data.password)}>
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#7e102c',
    alignItems: 'center',
    marginTop: 10,
    width: 150,
    alignSelf: 'center',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
