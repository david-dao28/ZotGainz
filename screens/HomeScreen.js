import react from "react";
import {Dimensions, Text, Button, View, StyleSheet} from 'react-native';

function HomeScreen(navigation) {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      });
    return (
        <View>
        <View>
            <Text style={styles.title}>Workout</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        width: 133,
        height: 37,
        top: 110,
        left: 16,
        fontFamily: 'Montserrat-Bold'
    }
});

export default HomeScreen