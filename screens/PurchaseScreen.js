import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Subheading
} from 'react-native-paper';
const PurchaseScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Headline>Purchases</Headline> */}
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>50.0 JD </Title>
          <Caption>Recent Balance</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>50.0 JD</Title>
          <Caption>Current Balance</Caption>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>Pending </Title>
          <Caption>Pending Orders</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>Completed</Title>
        </View>
      </View>
     
      <Subheading>Orders Name</Subheading>
      {/* <Subheading style={{alignSelf: 'flex-end'}}>price</Subheading> */}

     
     
     
      



      {/*     
        <Button
          color='#7e102c'
          title="RECHARGE"
          onPress={() => alert('Button Clicked!')}
        /> */}
    </View>
  );
};

export default PurchaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
