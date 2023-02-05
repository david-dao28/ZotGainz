import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Background } from '@react-navigation/elements';
import { useFonts } from "expo-font";

function Reservation({ time, end, court }) {
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });
  console.log({time});
  console.log({end});
  console.log({court});
  return (
    <View style={styles.reservationBody}>
        <ImageBackground source={require('../assets/images/tennis.png')} 
        resizeMode="cover"
        style={styles.image}>
          <Text style={styles.header}> Sunday 2/5 </Text>
          <Text style={styles.titleText}>Tennis Courts</Text>
          <View style={styles.innerImage}></View>
          <Text style={styles.contentText}>Court {court} </Text>
          <Text style={styles.contentText}>{time}-{end} </Text>
          
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    reservationBody: {
        flex: 1,
        width: 358,
        height: 200,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    image: {
        width: 358,
        height: 200,
        justifyContent: 'center',
    },
    titleText: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 20,
      width: 139,
      fontWeight: 500,
      lineHeight: 24.38,
      color: 'rgb(255,255,255)',
      left: 20,
    },
    contentText: {
      fontFamily: 'Montserrat-Regular',
      color: 'rgb(255,255,255)',
      fontSize: 15,
      left: 20,
      top: 25
    },
    header: {
      fontFamily: 'Montserrat-Bold',
      height: 25,
      fontSize: 20,
      lineHeight: 24,
      color: 'rgb(255,255,255)',
      bottom: 45,
      left: 20
    },
    innerContainer: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0.2)',
      zIndex: 1
    }
});

export default Reservation;