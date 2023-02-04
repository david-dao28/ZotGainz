import { View, Text, Button } from 'react-native'
import React from 'react'

export default function LoginScreen( { navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LoginScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}