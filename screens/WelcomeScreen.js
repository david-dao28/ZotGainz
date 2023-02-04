import { View, Text, Button, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        style={styles.background}
        source={require('../assets/images/welcome_background.png')}
      >
        <Text>WelcomeScreen</Text>
        <Button
          color='white'
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </ ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight
  },
  loginButton: {
    color: 'white'
  }
});