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

export default function OrderScreen4() {
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    name1: '',
    name2: '',
    check_textInputChange: false,
  });
  const textChange1 = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        name1: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name1: val,
        check_textInputChange: false,
      });
    }
  };

  const textChange2 = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        name2: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name2: val,
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
    if (data.name1.length == 0 || data.name2.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Player1 and Player fields cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }
    console.log('data name1', data.name1, data.name2);
    navigation.navigate('Purchase');

    console.log('you submit  Pubg screen4');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
            - Order Details -
          </Headline>
          <Headline style={{textAlign: 'center', fontSize: 20, marginTop: 30}}>
            - Players Number1 and Number2 (Required) -
          </Headline>

          <TextInput
            placeholder="Player Number1"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => textChange1(val)}
          />
          <TextInput
            placeholder="Player Number2"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={val => textChange2(val)}
          />

          <TouchableOpacity onPress={choosePhotoFromLibrary } style={styles.commandButtonFile}>
            <Text style={styles.panelButtonTitle}>Choose File</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => handleSubmit(data.name1, data.name2)}>
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
