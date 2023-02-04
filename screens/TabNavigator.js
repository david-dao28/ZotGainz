import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogScreen from './LogScreen';
import ReserveScreen from './ReserveScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen'
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ headerShown: false }}  
      />
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

export default TabNavigator;