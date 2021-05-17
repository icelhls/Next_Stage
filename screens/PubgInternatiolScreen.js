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
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function PubgInternatiolScreen({route}) {
  const order_id = route.params.id2;
  console.log('order_id', order_id)
  const [selectedValue, setSelectedValue] = useState('java');
  const [text, onChangeText] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    name: '',
    password: '',

    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const [subOrder, setSubOrder] = useState([]);


  const fetchOrder = async () => {
    try {
      // console.log('Data@@ subOrder', data)
      let response = await fetch(
        `http://192.168.1.46:8000/api/info/add`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            order_id: id,
          }),
        },
      );
      let responseJson = await response.json();

      console.log('responseSubOrder--', responseJson);
      console.log('screen id', id);

      // let subcategories = responseJson.subcategories;
      // setCategories(subcategories);
    } catch (error) {
      console.log(error);
    }
  };

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


  const handleSubmit = () => {
    if (data.name.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Facebook or Password fields cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }
    navigation.navigate('Purchase');


    fetchOrder();
    console.log('you submit  Pubg screen1');
  };

  

  useEffect(() => {
    // fetchOrder();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
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
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Facebook" value="facebook" />
            <Picker.Item label="Player Email" value="email" />
          </Picker>
          <TextInput
            placeholder="Facebook or Twitter"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => textChange(val)}
          />
          {/* <Headline style={{textAlign: 'center', fontSize: 20, marginTop: 30}}>
            - Password (required) -
          </Headline> */}

          <TextInput
            placeholder="-Password (required)-"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />

          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => handleSubmit(data.name, data.password)}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
