import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {
  Title,
  Caption,
  TouchableRipple,
  Headline,
  Text,
} from 'react-native-paper';
import {Button} from 'react-native';

export default function FreeFire() {
    const [selectedValue, setSelectedValue] = useState('java');
  const [text, onChangeText] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const [data, setData] = React.useState({
    name: '',
    password: '',

    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        name: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name: val,
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

  const handleSubmit =()=>{
      console.log('you submit pubg')
  }
    return (
        <View>
          <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
            - Order Details -
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
            - Password (Required) -
          </Headline> */}
    
          <TextInput
            placeholder="Password Required!!!!"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
    
          
    
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() =>
              handleSubmit(data.name,   data.password)
            }>
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
    alignSelf: 'center'
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

