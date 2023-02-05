import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'
import petr from '../assets/images/congrats-petr.png'
import { BottomSheet, Button, ListItem } from '@rneui/themed';

export default function ProfileScreen() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen</Text>
      <Button
      title="Open Bottom Sheet"
      onPress={() => setIsVisible(true)}
      color="#0059AC"
      radius={10}
    />

    <BottomSheet modalProps={{ transparent: true, backgroundColor: 'white'}} isVisible={isVisible}>
      <View style={{height: 700, backgroundColor: 'white'}}>
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.msg}>You have reserved a facility!</Text>
        <View style={styles.img}>
          <Image style={styles.petr} source={require('../assets/images/congrats-petr.png')} />
        </View>
        <Button
          title="Exit"
          onPress={() => setIsVisible(false)}
          color="#0059AC"
          radius={10}
          style={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </View>
    </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 291,
    height: 54,
    marginTop: 50,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
  },
  buttonText: {
    fontWeight: 500,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#FFD173',
  },
  title: {
    paddingTop: 64,
    fontSize: 30,
    fontWeight: 600,
    fontFamily: 'Montserrat-Bold',
    color: '#0059AC',
    alignSelf: 'center'
  },
  msg: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 500,
    fontFamily: 'Montserrat-Bold',
    color: '#0059AC',
    alignSelf: 'center'
  },
  img: {
    paddingTop: 40,
    alignContent: 'center'
  }, 
  petr: {
    marginLeft: 35,
  }, 
})