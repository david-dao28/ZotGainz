import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogScreen from "./LogScreen";
import ReserveScreen from "./ReserveScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import HomeClicked from '../svgs/Home.svg';
import Home from '../svgs/HomeClicked.svg';
import DumbellClicked from '../svgs/DumbellClicked.svg';
import DumbellUnclicked from '../svgs/DumbellUnclicked.svg';
import ReserveClicked from '../svgs/ReserveClicked.svg';
import ReserveUnclicked from '../svgs/ReserveUnclicked.svg';
import ProfileIconUnclicked from '../svgs/ProfileIconUnclicked';
import ProfileIconClicked from '../svgs/ProfileIconClicked';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({ 
      tabBarStyle: {height: 88, backgroundColor: "#0059AC"},
      tabBarLabelStyle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        lineHeight: 12.19,
        fontWeight: 600
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? HomeClicked
            : Home;
            if (iconName == HomeClicked)
            {
              return <Home width={30} height={30}/>;
            }
            else {
              return <HomeClicked width={30} height={30} />;
            }
        } else if (route.name === 'Workouts') {
          iconName = focused ? DumbellClicked : DumbellUnclicked;
          if (iconName == DumbellClicked)
          {
              return <DumbellClicked width={30} height={30}/>;
          }
          else {
            return <DumbellUnclicked width={30} height={30} />;
          }
        } else if (route.name === 'Reserve') {
          iconName = focused ? ReserveClicked : ReserveUnclicked;
          if (iconName == ReserveClicked)
          {
            return <ReserveClicked width={30} height={30} />;
          }
          else {
            return <ReserveUnclicked width={30} height={30} />;
          }
        } else if (route.name === 'Profile') {
          iconName = focused ? ProfileIconClicked : ProfileIconUnclicked;
          if (iconName == ProfileIconClicked)
          {
            return <ProfileIconClicked width={30} height={30} />;
          }
          else {
            return <ProfileIconUnclicked width={30} height={30} />;
          }
        }
        
        console.log(iconName)
        // You can return any component that you like here!
        // return <Text> Hi </Text>
      },
      tabBarActiveTintColor: '#FFD173',
      tabBarInactiveTintColor: 'gray',
    })
    }
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Workouts"
        component={LogScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Reserve"
        component={ReserveScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
