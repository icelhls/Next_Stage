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
  Alert,
} from 'react-native';
import { Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob';


export default function OrderScreen5({route}) {
  const order_id = route.params.id2;
  console.log('order_id', order_id);

    const navigation = useNavigation();
    const [imageo, setImageo] = useState('');
    const [exto, setExto] = useState('');
  

    const [data, setData] = React.useState({
      id: '',
      check_textInputChange: false,
    });
    const textChange = val => {
      if (val.length !== 0) {
        setData({
          ...data,
          id: val,
          check_textInputChange: true,
        });
      } else {
        setData({
          ...data,
          id: val,
          check_textInputChange: false,
        });
      }
    };

/////

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

      const submitOrder = async newData => {

       if(newData.id){
        console.log('fetch order_id', order_id);
        console.log('newdata fetch', newData);
    
        try {
          console.log('TTTTT',imageo )
          console.log('TTTTT',exto )
          console.log('TTTTT',order_id )
          console.log('TTTTT',newData.id )

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
              id: newData.id,
              ext:exto,
              image: imageo
           
            }),
          });
          let responseJson = await response.json();
          console.log('response', responseJson);
           navigation.navigate('Purchase');
        
    
    
        } catch (error) {
          console.log(error);
        }

      }else{
        alert('please select photo')
      }
      };


 


      const handleSubmit = () => {
        if (data.id.length == 0 ) {
          Alert.alert(
            'Wrong Input!',
            'Id player fields cannot be empty.',
            [{text: 'Okay'}],
          );
          return;
        }
    
        console.log('submit id@@@', order_id);
    
        let newData = {
          id: data.id,
         
        };
        console.log('newData', newData);
        submitOrder(newData);
        navigation.navigate('Purchase');
        console.log('you submit  screen1');
    
      };

      useEffect(() => {
        //submitOrder();
      }, []);



    return (
        <SafeAreaView>
            <ScrollView>
            <View>
            <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
            - Order Details -
          </Headline>
            <TextInput
            placeholder="Player Id"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => textChange(val)}
          />
                 <TouchableOpacity onPress={choosePhotoFromLibrary } style={styles.commandButtonFile}>
            <Text style={styles.panelButtonTitle}>Choose File</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => handleSubmit(data.id)}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>


        </View>

            </ScrollView>
        </SafeAreaView>
        
    )
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

})
