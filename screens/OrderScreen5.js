import React from 'react';

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


export default function OrderScreen5() {
    const navigation = useNavigation();

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
    
        const data = {
          image: result,
          ext: 'jpj',
          amount: amount
        };
    
        await updatePicture(data);
      }

      const handleSubmit = () => {

      
    
        console.log('you submit  Pubg screen 5');
      };



    return (
        <SafeAreaView>
            <ScrollView>
            <View>
            <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
            - Order Details -
          </Headline>
            <TextInput
            placeholder="Player Name"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => textChange(val)}
          />
                 <TouchableOpacity onPress={choosePhotoFromLibrary } style={styles.commandButtonFile}>
            <Text style={styles.panelButtonTitle}>Choose File</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => handleSubmit(data.name)}>
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
