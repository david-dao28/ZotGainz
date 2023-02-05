import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Background } from '@react-navigation/elements';

function Reservation({ time, end, court }) {
  return (
    <View style={styles.reservationBody}>
        <ImageBackground source={require('../assets/images/tennis.png')} 
        resizeMode="cover"
        style={styles.image}>
          <Text>Tennis Courts</Text>
          <Text>{time} {end} </Text>
          <Text>Court {court}</Text>
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
        justifyContent: 'center'
    }
});

export default Reservation;