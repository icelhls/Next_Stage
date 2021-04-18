import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



import {AuthContext} from '../components/context';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    name_en: '',
    name_ar: '',
    trade_name: '',
    phone: '',
    email: '',
    password: '',
    // confirm_password: '',
    config_pass: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const {signUp} = React.useContext(AuthContext);

  const textInputEnglishChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        name_en: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name_en: val,
        check_textInputChange: false,
      });
    }
  };

  const textInputArabicChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        name_ar: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name_ar: val,
        check_textInputChange: false,
      });
    }
  };
  const textInputTradeChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        trade_name: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        trade_name: val,
        check_textInputChange: false,
      });
    }
  };

  const phoneInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        phone: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_textInputChange: false,
      });
    }
  };

  const emailInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
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

  // const handleConfirmPasswordChange = val => {
  //   setData({
  //     ...data,
  //     confirm_password: val,
  //   });
  // };

  const handleConfigPass = val => {
    setData({
      ...data,
      config_pass: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const signUpHandle = (
    name_en,
    name_ar,
    trade_name,
    phone,
    email,
    password,
    config_pass,
  ) => {
    if (
      data.name_en.length == 0 ||
      data.name_ar.length == 0 ||
      data.trade_name.length == 0 ||
      data.phone.length == 0 ||
      data.email.length == 0 ||
      data.password.length == 0 ||
      data.config_pass.length == 0
    ) {
      Alert.alert('Wrong Input!', 'Phone or password field cannot be empty.', [
        {text: 'Okay'},
      ]);
      return;
    }
    // signIn(email, password);
    signUp(name_en, name_ar, trade_name, phone, email, password, config_pass);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7e102c" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Name_English</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Name English"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputEnglishChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Name_Arabic</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Name Arabic"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputArabicChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Trade Name</Text>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Trade Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputTradeChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>Phone</Text>
          <View style={styles.action}>
            <FontAwesome name="mobile-phone" color="#05375a" size={20} />
            <TextInput
              placeholder="phone"
              keyboardType="numeric"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => phoneInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => emailInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfigPass(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                signUpHandle(
                  data.name_en,
                  data.name_en,
                  data.trade_name,
                  data.phone,
                  data.email,
                  data.password,
                  data.config_pass,
                );

                navigation.navigate('SignInScreen');
                alert('Registration Successful');
              }}>
              <LinearGradient
                colors={['#7e102c', '#7e102c']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Register{' '}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#7e102c',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#7e102c',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e102c',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
