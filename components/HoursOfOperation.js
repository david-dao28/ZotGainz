import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function HoursOfOperation() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hours of Operation</Text>
      <Image source={require('../assets/images/hours-of-operation.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 32
  },
  
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    paddingBottom: 4
  }
});