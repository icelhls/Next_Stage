import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>Change password</Text> */}
      <Headline style={styles.titleStyle}>Change Password</Headline>
      <Input
        style={styles.textInput}
        placeholder="New Password"
        secureTextEntry={true}
      />
      <Input
        style={styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />

      <Button
        color="#7e102c"
        title="CHANGE"
        onPress={() => navigation.navigate('SignInScreen')}
      />
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    borderRadius: 10,
  },


  titleStyle: {
    marginBottom: 50,
    fontSize: 30,
  },
});
