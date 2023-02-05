import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { BottomSheet, Button, ListItem } from '@rneui/themed';

export default function ProfileScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1', 
      containerStyle: { height: 200} 
    },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen</Text>
      <Button
      title="Open Bottom Sheet"
      onPress={() => setIsVisible(true)}
      buttonStyle={styles.button}
    />

    <BottomSheet modalProps={{ transparent: true, backgroundColor: 'white'}} isVisible={isVisible}>
      <View style={{height: 700, backgroundColor: 'white'}}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Button
          title="Exit"
          onPress={() => setIsVisible(false)}
          style={styles.buttonContainer}
        />
      </View>
    </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 550
  },
})