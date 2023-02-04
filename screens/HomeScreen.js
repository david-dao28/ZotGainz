import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogScreen from './LogScreen';
import ReserveScreen from './ReserveScreen';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Log" 
        component={LogScreen}
        options={{ headerShown: false }}  
      />
      <Tab.Screen
        name="Reserve" 
        component={ReserveScreen} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  )
}

export default HomeScreen;