
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import { Button } from '@rneui/themed';
import { useFonts } from 'expo-font';
import ReservationList from './ReservationList';
import axios from 'axios';


const makeSmsApiRequest = () => {
  axios.get('http://169.234.116.118:3000/sms',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  })
}

const ReserveScreen = () => {
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  return (
    <ScrollView style={styles.bodyContainer}>
      <View>
        <Text style={styles.titleContainer}>
          Reserve Facility
        </Text>
      </View>
      <View>
      <Button
          title="Reserve a Facility"
          buttonStyle={styles.loginButton}
          containerStyle={styles.loginButtonContainer}
          titleStyle={styles.loginButtonText}
          onPress={() => { navigation.navigate('Login')}}
        />
      {/* <Button
          title="Send Message"
          onPress={makeSmsApiRequest}
        /> */}
      </View>
      <Text style={styles.reservationsText}>
        Your Reservations</Text>
      <ReservationList />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1
  },
  titleContainer: {
    marginTop: 64,
    left: 28,
    height: 37,
    width: 247,
    fontSize: 30,
    fontStyle: 'normal',
    lineHeight: 36.57,
    fontFamily: 'Montserrat-Bold',
    color: "#0059AC"
  },
  loginButton: {
    backgroundColor: '#0059AC',
    paddingVertical: 15,
    paddingHorizontal: 101,
    borderRadius: 10,
    width: 334,
    height: 54,
  },
  loginButtonContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginButtonText: {
    width: 132,
    height: 18,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    lineHeight: 18,
    color: '#FFD173'
  },
  reservationsText: {
    marginTop: 48,
    height: 24,
    left: 28,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 24,
    fontSize: 20,
  }

});

export default ReserveScreen;