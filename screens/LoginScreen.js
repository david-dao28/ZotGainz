import {StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Button } from '@rneui/themed';
import React, {useState} from 'react';
import Vector from "../svgs/Vector.svg";
import {useFonts} from 'expo-font';

export default function LoginScreen( { navigation } ) {
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Welcome')}}>
    <Vector width={20.12} height={19.62} />
    </TouchableOpacity>
      <Text style={styles.titleContainer}>Sign In</Text>
      <TextInput placeholder='Enter your UCI NetID' style={styles.textInputContainer}></TextInput>
      <Text style={styles.forgotTextContainer}> Forgot your netID?</Text>
      <Button
          title="Next"
          onPress={() => { navigation.navigate('HomeTab')}}
          buttonStyle={styles.loginButton}
          containerStyle={styles.loginButtonContainer}
          titleStyle={styles.loginButtonText}
        />
        {/* <Button
          title="Back"
          onPress={() => { navigation.goBack()}}
          buttonStyle={styles.loginButton}
          containerStyle={styles.loginButtonContainer}
          titleStyle={styles.loginButtonText}
        /> */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 57,
    marginLeft: 28,
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(235,235,235)',
    width: 48,
    height: 48,
    padding: 10,
    borderRadius: 100,
  },
  titleContainer: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    marginTop: 32,
    color: '#0059AC',
    lineHeight: 37,
    fontWeight: 700,
  },
  textInputContainer: {
    width: 334,
    marginTop: 16,
    paddingTop: 15,
    paddingRight: 40,
    paddingBottom: 15,
    paddingLeft: 19,
    backgroundColor: 'rgb(235,235,235)',
    borderRadius: 10
  },
  forgotTextContainer: {
    marginTop: 12,
    color: "#0059AC",
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
  },
  loginButton: {
    backgroundColor: '#0059AC',
    borderRadius: 60,
    width: 291,
    height: 54,
  },
  loginButtonContainer: {
    top: 470,
    marginLeft: 20
  },
  loginButtonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#FFD173'
  },
});