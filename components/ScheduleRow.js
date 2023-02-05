import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function ScheduleRow({ court, row, updateHandler }) {
  const courtNum = court;
  const [box, setBox] = useState([])
  useEffect(() => {
    setBox(row)
  })
  const updateRow = (boxNum) => {
    let newRow = [...box];
    if (box[boxNum] === 'green') {
      newRow[boxNum] = 'yellow';
    }
    else {
      newRow[boxNum] = 'green';
    }
    setBox(newRow);
    updateHandler(28*courtNum + boxNum);
  }
  // if (!fetchedSchedule) {
  //   return null;
  // }
  return (
    <View style={styles.flexrow_container}>
      <TouchableOpacity onPress={() => updateRow(0)}>
        <View style={{...styles.cell, backgroundColor: box[0]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(1)}>
        <View style={{...styles.cell, backgroundColor: box[1]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(2)}>
        <View style={{...styles.cell, backgroundColor: box[2]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(3)}>
        <View style={{...styles.cell, backgroundColor: box[3]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(4)}>
        <View style={{...styles.cell, backgroundColor: box[4]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(5)}>
        <View style={{...styles.cell, backgroundColor: box[5]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(6)}>
        <View style={{...styles.cell, backgroundColor: box[6]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(7)}>
        <View style={{...styles.cell, backgroundColor: box[7]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(8)}>
        <View style={{...styles.cell, backgroundColor: box[8]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(9)}>
        <View style={{...styles.cell, backgroundColor: box[9]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(10)}>
        <View style={{...styles.cell, backgroundColor: box[10]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(11)}>
        <View style={{...styles.cell, backgroundColor: box[11]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(12)}>
        <View style={{...styles.cell, backgroundColor: box[12]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(13)}>
        <View style={{...styles.cell, backgroundColor: box[13]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(14)}>
        <View style={{...styles.cell, backgroundColor: box[14]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(15)}>
        <View style={{...styles.cell, backgroundColor: box[15]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(16)}>
        <View style={{...styles.cell, backgroundColor: box[16]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(17)}>
        <View style={{...styles.cell, backgroundColor: box[17]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(18)}>
        <View style={{...styles.cell, backgroundColor: box[18]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(19)}>
        <View style={{...styles.cell, backgroundColor: box[19]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(20)}>
        <View style={{...styles.cell, backgroundColor: box[20]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(21)}>
        <View style={{...styles.cell, backgroundColor: box[21]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(22)}>
        <View style={{...styles.cell, backgroundColor: box[22]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(23)}>
        <View style={{...styles.cell, backgroundColor: box[23]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(24)}>
        <View style={{...styles.cell, backgroundColor: box[24]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(25)}>
        <View style={{...styles.cell, backgroundColor: box[25]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(26)}>
        <View style={{...styles.cell, backgroundColor: box[26]}}></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateRow(27)}>
        <View style={{...styles.cell, backgroundColor: box[27]}}></View> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    flexrow_container: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      cell:{
        backgroundColor: "#ebedf0",
        height: 40,
        width: 40,
        margin: 1,
      },
})