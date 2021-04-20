import React, {useState} from 'react';
import {View, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import VerticalList from '../components/VerticalList';
// import CartItem from '../screens/CartItem';
import CartItem from '../components/CartItem'
import {
  Title,
  Caption,
  TouchableRipple,
  Headline,
  Text,
} from 'react-native-paper';
import StyleSheet from 'react-native-media-query';
import {Image} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <>
      <View style={styles.sizeMedia}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <StatusBar
              barStyle={theme.dark ? 'light-content' : 'dark-content'}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image
                source={require('../assets/images/profile.jpg')}
                style={{
                  width: wp('50%'),
                  height: hp('25%'),
                  margin: 10,
                  marginBottom: 30,
                  flex: 1,
                }}
              />

              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#7e102c',
                  margin: 10,
                  width: 180,
                  marginBottom: 30,
                }}>
                <Caption style={{fontSize: 15, color: '#fff', marginLeft: 10}}>
                  Current Balance
                </Caption>
                <Title style={{fontSize: 30, color: '#fff', marginLeft: 10}}>
                  50.0 JD
                </Title>
              </View>
            </View>
              <Headline
              style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
              -كل الباقات-
            </Headline>
            <VerticalList />
            <Headline style={{textAlign: 'center', fontSize: 30, marginTop: 20}}>
              -عروض اليوم-
            </Headline>
            <CartItem />
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 2,
    borderTopColor: '#dddddd',
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 100,
    margin: 15,
  },
  infoBox: {
    // width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeMedia: {
    '@media (max-width: 700px)': {
      backgroundColor: 'blue',
    },
  },
  imageStyle: {},
});
