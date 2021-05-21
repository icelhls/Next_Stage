import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';
import {useTheme, Headline} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';

import ImagePicker from 'react-native-image-crop-picker';
const url = 'http://nextstageksa.com/cards/api/user/update';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
const RechargeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    amount: '',
  });

  const [amount, setAmount] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState('');
  const [imageo, setImageo] = useState('');
  const [exto, setExto] = useState('');



  const updatePicture = async ({data}) => {
    //console.log('DATA', data);
    if (imageo && amount) {
      try {
        console.log(' ext ', exto);
        console.log(' image ', imageo);
        console.log('Amount', amount);
        const api_token = await AsyncStorage.getItem('api_token');
        let response = await fetch(
          'https://nextstageksa.com/cards/api/charge/recharge',
          {
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
              amount: amount,
            }),
          },
        );

        let responseJson = await response.json();

        console.log('response api recharge@@', responseJson);
        navigation.navigate('Home');
        setAmount('');
      } catch (error) {
        console.log('errors Image', error);
      }
    } else {
      alert('please select photo and amount');
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
    setImageo(result);
    setExto('jpg');
    const data = {
      image: result,
      ext: 'jpg',
    };

    console.log('data', data);
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}} />

      {/* <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity> */}
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {/* {data.name_en} */} Recharge Account
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="money" color={colors.text} size={20} />
          <TextInput
            placeholder="Amount"
            placeholderTextColor="#666666"
            // keyboardType="email-address"
            value={amount}
            autoCorrect={false}
            onChangeText={val => setAmount(val)}
            keyboardType="numeric"
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
          onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Choose Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => updatePicture({data})}>
          <Text style={styles.panelButtonTitle}> Recharge Account </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default RechargeScreen;

const styles = StyleSheet.create({
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
