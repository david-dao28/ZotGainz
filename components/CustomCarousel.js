import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'

export default function CustomCarousel( { data }) {
  const [newData] = useState([...data, {key: 'spacer-right'}])
  const windowWidth = Dimensions.get("window").width;
  const SIZE = windowWidth * .55;
  const SPACER = (windowWidth - SIZE) / 4;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      style={styles.container}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate='fast'
    >
      {newData.map((item, index) => {
        if (!item.image) {
          return (
            <View style={{ width: SPACER}} key={index} />
          )
        }
        return (
          <View style={{width: SIZE}} key={index}>
            <View style={styles.imageContainer}>
              <Image source={item.image}/>
            </View>
          </View>
        )
      })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  imageContainer: {
    overflow: 'hidden'
  }
});