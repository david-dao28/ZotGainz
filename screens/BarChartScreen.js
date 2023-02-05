import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { BarChart } from "react-native-chart-kit";
import axios from 'axios';

const ARC_ID = 'ven_5968424372514c2d64317552414933643376415572324b4a496843';

const params = new URLSearchParams({ 
  'api_key_public': 'pub_fd51f71b4b3247059a7217217b2afd85',
  'venue_id': ARC_ID
});

const BarChartScreen = () => {
  const [trafficData, setTrafficData] = useState([])

  const getTrafficData = () => {
    axios.get(`https://besttime.app/api/v1/forecasts/day/raw?${params}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
  ).then((response) => {
      setTrafficData(response.data.analysis.day_raw)
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getTrafficData();
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Expected Busyness</Text>
      <BarChart
        data={{
          labels: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          datasets: [
            {
              data: [
                trafficData[0], trafficData[1], trafficData[3], trafficData[4], trafficData[5],
                trafficData[6], trafficData[7], trafficData[8], trafficData[9], trafficData[10],
                trafficData[11], trafficData[12], trafficData[13], trafficData[14], trafficData[15],
                trafficData[16], trafficData[17]
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 50} // from react-native
        height={220}
        yAxisSuffix="%"
        yAxisInterval={1} // Defaults to 1
        chartConfig={{
          fillShadowGradientOpacity: 0.8,
          backgroundColor: "#0059AC",
          backgroundGradientFrom: "#0059AC",
          backgroundGradientTo: "#0059AC",
          decimalPlaces: 2, // Defaults to 2dp
          color: (opacity = 1) => `rgba(255, 204, 0, ${opacity})`,
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
          },
          barPercentage: 0.3,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
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