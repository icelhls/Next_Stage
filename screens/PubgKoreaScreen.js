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
import {useTheme} from 'react-native-paper';

import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';

export default function PubgKoreaScreen({route}) {
  const order_id = route.params.id2;
  console.log('order_id', order_id);

  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState('java');

  const [nameo, setNameo] = useState('');
  const [imageo, setImageo] = useState('');
  const [exto, setExto] = useState('');

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
  const [image, setImage] = useState('');
  const [data, setData] = React.useState({
    name: '',
    check_textInputChange: false,
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

  const updatePicture = async ({data}) => {
    //console.log('DATA', data);
    if(imageo){

    

    try {
      // console.log(' TTTTTTT ', newData.name)
      console.log(' TTTTTTT ', order_id);
      console.log(' TTTTTTT ', exto);
      console.log(' TTTTTTT ', imageo);
      console.log('TTTTTTT', nameo)
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
          name: nameo
        }),
      });

      let responseJson = await response.json();

      console.log('response api', responseJson);
      navigation.navigate('Purchase');
     
    } catch (error) {
      console.log('errors Image', error);
    }
  }else{
    alert('please select photo')
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
  //         name: newData.name,
  //       }),
  //     });
  //     let responseJson = await response.json();
  //     console.log('response', responseJson);
  //     navigation.navigate('Purchase');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = () => {
  //   // if (data.id.length == 0 ) {
  //   //   Alert.alert(
  //   //     'Wrong Input!',
  //   //     'Id player fields cannot be empty.',
  //   //     [{text: 'Okay'}],
  //   //   );
  //   //   return;
  //   // }

  //   console.log('submit id@@@', order_id);

  //   let newData = {
  //     name: data.name,
  //   };
  //   console.log('newData', newData);
  //   submitOrder(newData);
  //   navigation.navigate('Purchase');
  //   console.log('you submit  screen1');
  // };

  // useEffect(() => {
  //   submitOrder();
  // }, []);

  return (
    <View>
      <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
        - تفاصيل الطلب -
      </Headline>
      <TextInput
        placeholder="اسم اللاعب - (اختياري)
        "
        style={styles.input}
        autoCapitalize="none"
        onChangeText={val => setNameo(val)}
      />
      <Text>صورة - (اجباري)</Text>
      <TouchableOpacity
        onPress={choosePhotoFromLibrary}
        style={styles.commandButtonFile}>
        <Text style={styles.panelButtonTitle}>Choose File</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => updatePicture({data})}>
        <Text style={styles.panelButtonTitle}>تأكيد الدفع </Text>
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
