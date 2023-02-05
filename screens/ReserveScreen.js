
import { View, Text, StyleSheet, ScrollView, Flex, FlatList, Modal, Pressable, Alert, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import { Button, BottomSheet } from '@rneui/themed';
import { useFonts } from 'expo-font';
import ReservationList from './ReservationList';
import axios from 'axios';
import ScheduleRow from '../components/ScheduleRow';
import CloseIcon from '../svgs/close-icon.svg';

const makeSmsApiRequest = () => {
  axios.get('http://169.234.116.118:3000/sms',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
    throw error;
  })
}

const timeArr = ["8:00 AM", "9:00 AM", "10:00 AM",
"11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
"4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
"9:00 PM"];


const ReserveScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [schedule, setSchedule] = useState(
    ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green',
    'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green',
    'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green',
    'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green',
    'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green']
    )

  const [isVisible, setIsVisible] = useState(false);

  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  const updateScheduleHandler = (boxNum) => {
    let newSchedule = [...schedule];
    if (newSchedule[boxNum] === 'green') {
      newSchedule[boxNum] = 'yellow';
    }
    else {
      newSchedule[boxNum] = 'green';
    }
    setSchedule(newSchedule);
  }
  
  const boxIsSelected = () => {
    return schedule.find(box => box === 'yellow'); 
  }

  const onSubmitTimes = () => {
      const selectedBoxes = schedule.findIndex(box => box === 'yellow');
      let newSchedule = [...schedule];
      selectedBoxes.forEach(index => newSchedule[index] = 'red');
      setSchedule(newSchedule);
  }
  
  const showConfirmation = () => {
    setIsVisible(false)
    setModalVisible(true)
  }

  const closeConfirmation = () => {
    setIsVisible(false)
    setModalVisible(false)
  }

  if (!loaded) {
    return null;
  }
  return (
     <ScrollView style={styles.bodyContainer}>
      <View>
        <Text style={styles.titleContainer}>
          Reserve Facility
        </Text>
      </View>
      <BottomSheet modalProps={{ transparent: true, backgroundColor: 'white'}} isVisible={isVisible}>
        <View style={{height: 700, backgroundColor: 'white'}}>
          <View>
            <Text style={styles.dateText}>
              02/05/23
            </Text>
            <TouchableOpacity style={styles.scheduleClose} onPress={() => setIsVisible(false)}>
              <CloseIcon  width={30} height={30} /> 
            </TouchableOpacity> 
          </View>
          <ScrollView horizontal style={styles.scheduleContainer} 
          contentContainerStyle={{flexDirection: 'row'}}>
            <View style={styles.spaceSection}>
              <View style={styles.courtTitle}>
                <Text style={styles.courtTextTitle}>
                  Space
                </Text>
              </View>
                <View style={styles.courtLower}>
                  <Text style={styles.courtLowerText}>
                    Court 1
                  </Text>
                 </View>
                <View>
                <View style={styles.courtLower}>
                  <Text style={styles.courtLowerText}>
                    Court 2
                  </Text>
                </View>
                <View style={styles.courtLower}>
                  <Text style={styles.courtLowerText}>
                    Court 3
                </Text>
                </View>
                <View style={styles.courtLower}>
                  <Text style={styles.courtLowerText}>
                    Court 4
                  </Text>
                </View>
                <View style={styles.courtLower}>
                  <Text style={styles.courtLowerText}>
                    Court 5
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.gridSection}>
              <View style={styles.timeContainer}>
                {timeArr.map((time) => <Text style={styles.timeText}>{time}</Text>)}
              </View>
              <ScheduleRow court = {0} row={schedule.slice(0, 28)} updateHandler={updateScheduleHandler}/>
              <ScheduleRow court = {1} row={schedule.slice(28, 56)} updateHandler={updateScheduleHandler}/>
              <ScheduleRow court = {2} row={schedule.slice(56, 84)} updateHandler={updateScheduleHandler}/>
              <ScheduleRow court = {3} row={schedule.slice(84, 112)} updateHandler={updateScheduleHandler}/>
              <ScheduleRow court = {4} row={schedule.slice(112, 140)} updateHandler={updateScheduleHandler}/>
            </View>
          </ScrollView>
          {boxIsSelected() && <Button
            title="Submit"
            onPress={() => showConfirmation()}
            style={styles.submitButton}
            containerStyle={styles.submitButtonContainer}
            titleStyle={styles.submitButtonText}
            color="#0059AC"
            radius={10}
          />
          }
        </View>
      </BottomSheet>
      <Button
          title="Reserve a Facility"
          buttonStyle={styles.loginButton}
          containerStyle={styles.loginButtonContainer}
          titleStyle={styles.loginButtonText}
          onPress={() => setIsVisible(true)}
      />
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeIcon} onPress={closeConfirmation}>
              <CloseIcon  width={30} height={30} /> 
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Your reservation:</Text>
            <Text style={styles.modalSubTitle}>Tennis Courts</Text>
            <Text style={styles.modalText}>Court A</Text>
            <Text style={styles.modalText}>February 4, 2023</Text>
            <Text style={styles.modalText}>8:00 AM to 9:00 AM</Text>
            <Text style={styles.modalCaption}>4 Rackets, 10 Balls</Text>
            <Button
              title="Confirm"
              onPress={() => closeConfirmation()}
              color="#0059AC"
              radius={10}
              style={styles.buttonContainer}
              titleStyle={styles.buttonText}
            />
          </View>
        </View>
      </Modal>
      {/* <Button
          title="Send Message"
          onPress={makeSmsApiRequest}
        /> */}
      <Text style={styles.reservationsText}>
        Your Reservations</Text>
      <ReservationList />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  top_container:{
    paddingTop: 10,
    backgroundColor: 'red',
  },
  bodyContainer: {
    flex: 1,
    
  },
  titleContainer: {
    marginTop: 64,
    left: 28,
    height: 37,
    width: 247,
    fontSize: 30,
    fontStyle: 'normal',
    lineHeight: 36.57,
    fontFamily: 'Montserrat-Bold',
    color: "#0059AC"
  },
  loginButton: {
    backgroundColor: '#0059AC',
    paddingVertical: 15,
    borderRadius: 10,
    width: 360, // OG 334
    height: 54,
  },
  loginButtonContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginButtonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontWeight: 500,
    // lineHeight: 18,
    color: '#FFD173'
  },
  submitButton: {
    backgroundColor: '#0059AC',
    borderRadius: 10,
    width: 360, // OG 334
    height: 54,
    alignSelf: 'center'
  },
  submitButtonContainer: {
    marginBottom: 30,
    justifyContent: 'center'
  },
  submitButtonText: {
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontWeight: 500,
    // lineHeight: 18,
    color: '#FFD173'
  },
  reservationsText: {
    marginTop: 48,
    height: 24,
    left: 28,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 24,
    fontSize: 20,
  },
  scheduleContainer: {
    top: 64,
    flexDirection: 'row',
  },
  dateContainer: {
    height: 30,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 2,
  },
  timeContainer: {
    flexDirection: 'row',
    height: 68,
  },
  timeText: {
    width: '7.1428%',
    textAlign: 'center',
    borderWidth: 1,
    padding: 25,
    borderColor: '#D9D9D9',
    borderRadius: 2,
  },
  dateText: {
    fontFamily: 'Montserrat-Bold',
    color: '#0059AC', 
    fontSize: 30,
    paddingLeft: 28,
    top: 20
  },
  spaceSection: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    marginRight: 7
  },
  gridSection: {
    flex: 1,
    paddingRight: 28
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width: 300,
    height: 400,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 25,
    fontWeight: 600
  },
  modalSubTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
    fontWeight: 600
  },
  modalSubTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: 500
  },
  modalCaption: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 500
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  scheduleClose: {
    paddingLeft: 340,
    top: -15
  },
  closeIcon: {
    paddingLeft: 225,
    bottom: 15
  },
  courtTitle: {
    marginLeft: 28,
    fontFamily: 'Montserrat-Regular',
    height: 69,
    width: 144,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 2,
    justifyContent: 'center'
  },
  courtTextTitle: {
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular'
  },
  courtLower: {
    justifyContent: 'center',
    marginLeft: 28,
    height: 59,
    width: 144,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 2,
  },
  courtLowerText: {
    justifyContent: 'center',
    marginLeft: 15,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    width: 200,
    height: 54,
    marginTop: 75,
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
});

export default ReserveScreen;