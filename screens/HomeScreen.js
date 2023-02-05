import react from "react";
import {Dimensions, Text, Button, View, StyleSheet, ScrollView} from 'react-native';
import { useFonts } from "expo-font";
import CustomCarousel from "../components/CustomCarousel";
import UpcomingEvents from "../components/UpcomingEvents";
import HoursOfOperation from "../components/HoursOfOperation";
import BusynessBarChart from "../components/BusynessBarChart";

function HomeScreen(navigation) {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!loaded) {
      return null;
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Home</Text>
          <HoursOfOperation />
          <UpcomingEvents /> 
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white'
    },
    innerContainer: {
      flex: 1, 
      left: 28
    },
    title: {
      paddingTop: 64,
      fontSize: 30,
      fontFamily: 'Montserrat-Bold',
      color: '#0059AC',
    }, 
    sectionTitle: {
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      paddingBottom: 4
    }
});

export default HomeScreen