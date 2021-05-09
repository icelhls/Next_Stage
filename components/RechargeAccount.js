import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme, Headline} from 'react-native-paper';


export default function RechargeAccount() {
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState('');
  const [amount, setAmount] = useState(null);
  const [number, onChangeNumber] = React.useState(null);

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

    await handleSubmit(data);
  };

  const handleSubmit = async data => {
    console.log('check base 64', data);

    try {
      const api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(
        'http://192.168.1.46:8000/api/charge/recharge',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Authorization: 'Bearer ' + api_token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: data.image,
            ext: data.ext,
            amount: data.amount
          }),
        },
      );

      let responseJson = await response.json();
      console.log('responseReCHARGE@@@@@@', responseJson);
      let image = responseJson.chargeData.image;
      console.log('imageMutsfa', image);
      setImage(image);
      setAmount('')
    } catch (error) {
      console.log('errors Image', error);
    }
  };

  
  const {colors} = useTheme();

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <View>
      <Text>recharge</Text>
      <Button title="choose photo" onPress={() => choosePhotoFromLibrary()} />

      {/* {image ? image && ( <Image
           source={{uri: image}}
           style={{width: 50, height: 50}}
            />): null} */}

      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="amount"
        keyboardType="numeric"
      />
      <Text>amount: {amount}</Text>

      <View style={styles.action}>
          <FontAwesome name="money" color={colors.text} size={20} />
          <TextInput
            placeholder="Amount"
            placeholderTextColor="#666666"
            // keyboardType="email-address"
            value={amount}
            autoCorrect={false}
            // value={data.email}
            // onChangeText={val => changeAmountInput(val)}
            onChangeText={setAmount}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
      <TouchableOpacity
          style={styles.commandButton}
          onPress={() =>
            handleSubmit(data.image, data.name_en, data.phone, data.amount)
          }>
          <Text style={styles.panelButtonTitle}>PROCEED</Text>
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
    //   commandButton: {
    //     padding: 15,
    //     borderRadius: 10,
    //     backgroundColor: '#7e102c',
    //     alignItems: 'center',
    //     marginTop: 10,
    //   },
    //   panelButtonTitle: {
    //     fontSize: 17,
    //     fontWeight: 'bold',
    //     color: 'white',
    //   },

      container: {
        flex: 1,
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#7e102c',
        alignItems: 'center',
        marginTop: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
      actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },

});
