import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';
const url = 'http://nextstageksa.com/cards/api/user/update';
import {useNavigation} from '@react-navigation/native';

const EditProfileScreen = () => {
  const [data, setData] = React.useState({
    name_en: '',
    // name_ar: '',
    trade_name: '',
    phone: '',
    email: '',
  });

  const navigation = useNavigation();

  const fetchEditProfile = async newdata => {
    try {
      api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + api_token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newdata),
      });

      let responseJson = await response.json();
      // console.log('responseJsonUpdateProfile---', responseJson.data);
      let data = responseJson.data;
      console.log('Data', data);
      console.log('MustafProfile', {name_en: data.name_en});
      setData({
        name_en: data.name_en,
        trade_name: data.trade_name,
        phone: data.phone,
        email: data.email,
      });
    } catch (error) {
      console.log('errors profile', error);
    }
  };


  // const [updateImage, setUpdateImage]= useState({
  //   image: '',
  //   ext: '',
  // })


  // const updatePicture = async data => {
  //   console.log('datadata', data)
  //   let image = data.image
  //   let ext = data.ext
  //   console.log('image', image, 'ext', ext)
  
    
  //   try {
  //     api_token = await AsyncStorage.getItem('api_token');
  //     let response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         Authorization: 'Bearer ' + api_token,
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         image: image,
  //         ext: ext

  //       }),
  //     });

  //     let responseJson = await response.json();
  //     console.log('responseImage@@@@@@', responseJson)
  //     // let updateImage = responseJson.data
  //     // console.log('wow image@@@', {image: updateImage.image})
  //     // setUpdateImage({
  //     //   image: updateImage.image,
  //     //   ext: 'image/jpg'
  //     // })

  //     // let image = responseJson.data.image
  //     // setImage(image)

  //     // console.log('imge444', image, 'ext', ext)
      
  //     // setImage({
  //     //   image: image
  //     // })
      
  //     // setImage({
  //     //   image: image.path
  //     // })
  //     // // console.log('responseJsonUpdateProfile---', responseJson.data);
  //     // let image = responseJson.data.image;

  //     // console.log('Image-----//', {image: image});

  //   } catch (error) {
  //     console.log('errors Image', error);
  //   }
  // };










  const textInputChange = val => {
    setData({
      ...data,
      name_en: val,
    });
  };

  const changeTradeInput = val => {
    setData({
      ...data,
      trade_name: val,
    });
  };
  const changePhoneInput = val => {
    setData({
      ...data,
      phone: val,
    });
  };

  const changeEmailInput = val => {
    setData({
      ...data,
      email: val,
    });
  };

  const handleSubmit = () => {
    const newData = {
      name_en: data.name_en,
      trade_name: data.trade_name,
      phone: data.phone,
      email: data.email,
    };
    console.log('newdata', newData);
    fetchEditProfile(newData);
    navigation.navigate('Profile')
    alert('profile updated successfully')
  };

  useEffect(() => {
    fetchEditProfile();
    updatePicture()
  }, []);

 

 
  const {colors} = useTheme();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  // const choosePhotoFromLibrary = async () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   }).then(image => {
    

        
  //     console.log('image ******', image.path)
    
  //     // setImagebase(image.path);
   
  //     // console.log('ImageBASE', imagebase)
  //   //  setImage({
  //   //    image : image.path
  //   //  })
  //   setImage(image.path)
  //   // setUpdateImage(image.path)
      
  //     this.bs.current.snapTo(1);
    
 

  //   })
  //   // .then(async()=>{
  //   //     await console.log('imageBase64', image )
  //   //         const result = await RNFetchBlob.fs.readFile( image, 'base64');
  //   //   console.log('MustafBase64', result)


  //   // })
  //   // .then(async()=>{
  //   //   console.log('imageBase64', image )

  //   //   const result = await RNFetchBlob.fs.readFile( image, 'base64');
  //   //   console.log('MustafBase64', result)

  //   // })
    
 
  //   // console.log('base64', result)
  //   // await  setImage(result)
    
  //      console.log('imageBase64', image )
  //   const result = await RNFetchBlob.fs.readFile( image, 'base64');
  //   await setImage(result)
  //   // await  setImage({
  //   //   image: result,
  //   //   exit: 'image/jpg'
      
  //   // })
  //   // await setImage(result)
  //   // await setUpdateImage({
  //   //   image: result,
  //   //   ext: 'image/jpg'
  //   // })

  //      console.log('MustafBase64', result)

  //     //  await setUpdateImage({
  //     //    image: result,
  //     //    ext: 'image/jpg'
  //     //  })

  //      console.log('updateImage', result)

  //   const data = {
  //     image : result,
  //     ext: 'jpg'
  //   }

  //   // await setUpdateImage({
  //   //   image: data.image,
  //   //   ext: data.ext
  //   // })
  //   // console.log('updateImage', updateImage)



  //   console.log('Data Image', data.image)
  //   await updatePicture(data)
 
  // };
  // const [image, setImage] = useState('')

  const [image, setImage] = useState('');
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
    };

    await updatePicture(data);
  };

  const updatePicture = async data => {
    console.log('check base 64', data);

    try {
      const api_token = await AsyncStorage.getItem('api_token');
      let response = await fetch(
        'http://nextstageksa.com/cards/api/user/update',
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
          }),
        },
      );

      let responseJson = await response.json();
 
      console.log('responseUpdatedProfile@@@@@@', responseJson);
      // let image = responseJson.data.image
      // console.log('ImageProfile', image)
      // setImage(image)
      // navigation.navigate('Home')
    } catch (error) {
      console.log('errors Image', error);
    }
  };






  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
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
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {data.name_en}
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Name English"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={data.name_en}
            onChangeText={val => textInputChange(val)}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Trade Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={data.trade_name}
            onChangeText={val => changeTradeInput(val)}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            value={data.phone}
            onChangeText={val => changePhoneInput(val)}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            value={data.email}
            onChangeText={val => changeEmailInput(val)}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        {/* <View style={styles.action}>
          <FontAwesome name="globe" color={colors.text} size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View> */}
        {/* <View style={styles.action}>
          <Icon name="map-marker-outline" color={colors.text} size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View> */}
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() =>
            handleSubmit(data.name_en, data.trade_name, data.phone, data.email)
          }>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
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
