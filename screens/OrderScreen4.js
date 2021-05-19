import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
import {useTheme} from 'react-native-paper';

export default function OrderScreen4({route}) {
  const order_id = route.params.id2;
  console.log('order_id', order_id);
  const navigation = useNavigation();

  // const [data, setData] = React.useState({
  //   name1: '',
  //   name2: '',
  //   check_textInputChange: false,
  // });
  // const textChange1 = val => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       name1: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       name1: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };

  // const textChange2 = val => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       name2: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       name2: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };

  // const choosePhotoFromLibrary = async () => {
  //   const file = await ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   });

  //   console.log('imageBase', file);
  //   const result = await RNFetchBlob.fs.readFile(file.path, 'base64');

  //   console.log('result', result);

  //   const data = {
  //     image: result,
  //     ext: 'jpj',
  //     amount: amount
  //   };

  //   await updatePicture(data);
  // }

  // const handleSubmit = () => {
  //   if (data.name1.length == 0 || data.name2.length == 0) {
  //     Alert.alert(
  //       'Wrong Input!',
  //       'Player1 and Player fields cannot be empty.',
  //       [{text: 'Okay'}],
  //     );
  //     return;
  //   }
  //   console.log('data name1', data.name1, data.name2);
  //   navigation.navigate('Purchase');

  //   console.log('you submit  Pubg screen4');
  // };



  // const [data, setData] = React.useState({
  //   email: '',
  //   password: '',

  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   confirm_secureTextEntry: true,
  // });

  // const textChange = val => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };

  // const handlePasswordChange = val => {
  //   setData({
  //     ...data,
  //     password: val,
  //   });
  // };

  // const submitOrder = async newData => {
  //   console.log('fetch order_id', order_id);
  //   console.log('newdata fetch', newData);

  //   try {
  //     const api_token = await AsyncStorage.getItem('api_token');
  //     let response = await fetch(`http://192.168.1.46:8000/api/info/add`, {
  //       method: 'POST',
  //       headers: {
  //         Authorization: 'Bearer ' + api_token,
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         order_id: order_id,
  //         email: newData.email,
  //         password: newData.password,
  //       }),
  //     });
  //     let responseJson = await response.json();
  //     console.log('response', responseJson);
  //      navigation.navigate('Purchase');

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = () => {
  //   if (data.email.length == 0 || data.password.length == 0) {
  //     Alert.alert(
  //       'Wrong Input!',
  //       'Facebook or Password fields cannot be empty.',
  //       [{text: 'Okay'}],
  //     );
  //     return;
  //   }
  //   // navigation.navigate('Purchase');
  //   console.log('submit id@@@', order_id);

  //   let newData = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   console.log('newData', newData);
  //   submitOrder(newData);
  //   navigation.navigate('Purchase');
  //   console.log('you submit  Pubg screen1');
  // };

  // useEffect(() => {
  //   submitOrder();
  // }, []);

  

  const [imageo, setImageo] = useState('');
  const [exto, setExto] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('');
  const [id_2, setId2] = useState('');

  const [data, setData] = React.useState({
    name: '',
    check_textInputChange: false,
  });


  const updatePicture = async ({data}) => {
    //console.log('DATA', data);

 

    

    try {
      // console.log(' TTTTTTT ', newData.name)
      console.log(' TTTTTTT ', order_id);
      console.log(' TTTTTTT ', exto);
      console.log(' TTTTTTT ', imageo);
      // console.log('TTTTTTT', nameo)

      console.log(' id ', id);
      console.log('id_2', id_2)
      const api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch('http://192.168.1.46:8000/api/info/add', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Authorization: 'Bearer ' + api_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageo,
          ext: exto,
          order_id: order_id,
          // id: id,
          // id_2: id_2
          
        }),
      });

      let responseJson = await response.json();

      console.log('response api', responseJson);
      navigation.navigate('Purchase');
     
    } catch (error) {
      console.log('errors Image', error);
    }

  };



  const {colors} = useTheme();

  const choosePhotoFromLibrary = async () => {
    const file = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    });

    console.log('imageBase', file);
    const result = await RNFetchBlob.fs.readFile(file.path, 'base64');

    console.log('result', result);
    setImageo(result)
    setExto('jpg')
    const data = {
      image: result,
      ext: 'jpg',
      // name: data.name
    };

    console.log('data', data);

    // await updatePicture(data);
  };








  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
            - Order Details - {id}
          </Headline>
          <Headline style={{textAlign: 'center', fontSize: 20, marginTop: 30}}>
            - Players Number1 and Number2 (Required) -{id_2}
          </Headline>

          <TextInput
            placeholder="Player Number1"
            style={styles.input}
            autoCapitalize="none"
            // onChangeText={val => textChange1(val)}
            onChangeText={val => setId(val)}
            
          />
          <TextInput
            placeholder="Player Number2"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => setId2(val)}
          />

          <TouchableOpacity onPress={choosePhotoFromLibrary } style={styles.commandButtonFile}>
            <Text style={styles.panelButtonTitle}>Choose File</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.commandButton}
            onPress={() => handleSubmit(data.name1, data.name2)}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity> */}


<TouchableOpacity
        style={styles.commandButton}
        onPress={() => updatePicture({data})}>
        <Text style={styles.panelButtonTitle}>تأكيد الدفع </Text>
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
    width: 225,

    alignSelf: 'center',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  commandButtonFile: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#7e102c',
    alignItems: 'center',
    marginTop: 10,
    width: 150,

    alignSelf: 'center',
  },
});
