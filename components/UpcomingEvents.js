import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomCarousel from './CustomCarousel'

export default function UpcomingEvents() {
  const events = [
    {
      image: require('../assets/images/f45-training.png')
    },
    {
      image: require('../assets/images/ropes-course.png')
    },
    {
      image: require('../assets/images/zumba.png')
    },
    {
      image: require('../assets/images/pilates.png')
    }
  ];
  
  return (
    <View>
      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      <CustomCarousel data={events} />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    paddingBottom: 4
  }
});