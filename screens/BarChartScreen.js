import React, { useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  Dimensions,
} from 'react-native';

import { BarChart } from "react-native-chart-kit";

const BarChartScreen = () => {
  return (
    <View style={[styles.container]}>
  <Text style={[styles.title]}>Expected Busyness</Text>
  <BarChart
    data={{
      labels: ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM"],//, "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM",],
      datasets: [
        {
          data: [
            20, 45, 28, 80, 99, 43
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width - 50} // from react-native
    height={220}
    yAxisSuffix="%"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      },
      propsForHorizontalLabels: {
        fontSize: 9,
        x: 45,
      },
      propsForVerticalLabels: {
        fontSize: 9,
        // translateX: -25
      },
      barPercentage: 0.6,
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16, // OG 16
    }}
  />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 50,
    paddingTop: 80,
    alignSelf: 'center'
  },
  barChartText: {
    paddingRight: 25
  }
});

export default BarChartScreen;