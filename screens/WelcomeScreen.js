import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Button } from '@rneui/themed';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WelcomeScreen({ navigation }) {
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        style={styles.background}
        source={require('../assets/images/welcome_background.png')}
      >
        <Text style={styles.title}>ZotGainz</Text>
        <Button
          title="Sign in with UCI ID"
          buttonStyle={styles.loginButton}
          containerStyle={styles.loginButtonContainer}
          titleStyle={styles.loginButtonText}
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
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
    position: 'absolute'
  },
  loginButton: {
    backgroundColor: '#0059AC',
    borderRadius: 60,
  },
  loginButtonContainer: {
    width: 291,
    top: 544
  },
  loginButtonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#FFD173'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 50,
    paddingTop: 134
  }
});