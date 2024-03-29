
import { View, Text, StyleSheet, ScrollView, Flex, FlatList, Modal, Pressable, Alert, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import { Button, BottomSheet } from '@rneui/themed';
import { useFonts } from 'expo-font';
import ReservationList from './ReservationList';
import Reservation from './Reservation'
import axios from 'axios';
import ScheduleRow from '../components/ScheduleRow';
import CloseIcon from '../svgs/close-icon.svg';
import moment from 'moment/moment';

const timeArr = ["8:00 AM", "9:00 AM", "10:00 AM",
"11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
"4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
"9:00 PM"];


const ReserveScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [congratsVisible, setCongratsVisible] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [cardData, setCardData] = useState([]);
  const [endTime, setEndTime] = useState('');
  const [courtNum, setCourtNum] = useState('');
  const [schedule, setSchedule] = useState(
    ['#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A',
    '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A',
    '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A',
    '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A',
    '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A', '#4BA56A']
    )
  const [isVisible, setIsVisible] = useState(false);
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // get today's date
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = String(today.getFullYear()).slice(2);
  const todaysDate = `${month}/${day}/${year}`;

  const makeSmsApiRequest = async (start, end, court) => {
    console.log("MAKING API REQUEST")
    const options = {
      method: "GET",
      url: 'http://169.234.116.118:3000/sms',
      params: {start: start, end: end, court: court}
    }
    axios.request(options).then((response => {
      console.log("Successfully sent message!")
    })).catch((error) => {
      console.log(error)
    })
  //   axios.get(`http://192.168.0.173/sms?startDate=${startTime}&endDate=${endTime}&courtNum=${courtNum}`
  //   ).then((response) => {
  //       console.log(response);
  //     }).catch((error) => {
  //       console.log(error);
  //       throw error;
  //     })
  }
  
  function addCardDataHandler() {
    setCardData((cardState) => [...cardState, {time: startTime,
      end: endTime, court: courtNum
    }])

    console.log(startTime);
    console.log(endTime);
    console.log(courtNum);
  }

  const updateScheduleHandler = (boxNum) => {
    let newSchedule = [...schedule];
    if (newSchedule[boxNum] === '#4BA56A') {
      newSchedule[boxNum] = '#FFD173';
    }
    else {
      newSchedule[boxNum] = '#4BA56A';
    }
    setSchedule(newSchedule);
  }
  
  const boxIsSelected = () => {
    return schedule.find(box => box === '#FFD173'); 
  }

  const onSubmitTimes = async () => {
    let selectedDate = new Date(2023, 2, 5, 8, 0, 0);
    const selectedBoxes = []
    for (let i = 0; i < schedule.length; ++i) {
      if (schedule[i] === '#FFD173') {
        selectedBoxes.push(i);
      }
    }
    console.log("SELECTED BOXES", selectedBoxes)
    let newSchedule = [...schedule];
    for (let i = 0; i < selectedBoxes.length; ++i) {
      newSchedule[selectedBoxes[i]] = '#D34242'; 
    }
    let startTimeUnformatted = moment(selectedDate.getTime() + (30*(selectedBoxes[0]%28)) * 60000).toDate();
    let endTimeUnformatted = moment(selectedDate.getTime() + (30*((selectedBoxes[selectedBoxes.length-1]+1)%28)) * 60000).toDate();
    let courtNum = 1;

    if (selectedBoxes[0] >= 28 && selectedBoxes[0] < 56) {
      courtNum = 2;
    } else if (selectedBoxes[0] >= 56 && selectedBoxes[0] < 84) {
      courtNum = 3;
    } else if (selectedBoxes[0] >= 84 && selectedBoxes[0] < 112)
    {
      courtNum = 4;
    } else if (selectedBoxes[0] >= 112 && selectedBoxes[0] < 140) {
      courtNum = 5; 
    }

    setStartTime(moment(startTimeUnformatted).format('hh:mm a'));
    setEndTime(moment(endTimeUnformatted).format('hh:mm a'));
    setCourtNum(courtNum);
    
    // console.log(newSchedule)
    setSchedule(newSchedule);
  }
  
  const showConfirmation = () => {
    setIsVisible(false)
    setModalVisible(true)
    onSubmitTimes();
  }

  const closeConfirmation = () => {
    setIsVisible(false)
    setModalVisible(false);
  }

  const showCongrats = async () => {
    setIsVisible(false);
    setModalVisible(false);
    await makeSmsApiRequest(startTime, endTime, courtNum);
    setCongratsVisible(true);
    addCardDataHandler();
  }

  const closeCongrats = () => {
    setIsVisible(false)
    setModalVisible(false)
    setCongratsVisible(false)
  }

  if (!loaded) {
    return null;
  }
  return (
     <ScrollView style={styles.bodyContainer} bounces={false}>
      <View>
        <Text style={styles.titleContainer}>
          Reserve Facility
        </Text>
      </View>
      <BottomSheet modalProps={{ transparent: true, backgroundColor: 'white'}} isVisible={isVisible}>
        <View style={{height: 700, backgroundColor: 'white'}}>
          <View>
            <Text style={styles.dateText}>
             {todaysDate} 
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
          <View style={{flexDirection: 'row', bottom: 70, left: 40}} >
            <View style={styles.classicWrapper}>
              <View style={styles.available}></View>
              <Text style={styles.keyText}>Available</Text>
            </View>
            <View style={styles.classicWrapper}>
              <View style={styles.yourbooking}></View>
              <Text style={styles.keyText}>Your Booking</Text>
            </View>
            <View style={styles.classicWrapper}>
              <View style={styles.unavailable}></View>
              <Text style={styles.keyText}>Unavailable</Text>
            </View>
          </View>
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
            <Text style={styles.modalText}>Court {courtNum}</Text>
            <Text style={styles.modalText}>February 5, 2023</Text>
            <Text style={styles.modalText}>{startTime} to {endTime}</Text>
            <Button
              title="Confirm"
              onPress={() => showCongrats()}
              color="#0059AC"
              radius={10}
              style={styles.buttonContainer}
              titleStyle={styles.buttonText}
            />
          </View>
        </View>
      </Modal>

      <BottomSheet modalProps={{ transparent: true, backgroundColor: 'white'}} isVisible={congratsVisible} style={{zIndex: 1}}>
      <View style={{height: 750, backgroundColor: 'white', marginTop: 100}}>
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.msg}>You have reserved a facility!</Text>
        <View style={styles.img}>
          <Image style={styles.petr} source={require('../assets/images/congrats-petr.png')} />
        </View>
        <Button
          title="Exit"
          onPress={() => closeCongrats()}
          color="#0059AC"
          radius={10}
          style={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </View>
    </BottomSheet>
      <Text style={styles.reservationsText}>
        Your Reservations</Text>
        <View>
          {cardData && 
          cardData.map((card) => <Reservation time={card.time} end={card.end} court={card.court}/>)}
        </View>
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
    top: 40,
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
    top: 5,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
    fontWeight: 600
  },
  modalText: {
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
    fontFamily: 'Montserrat-Bold'
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
  title: {
    paddingTop: 64,
    fontSize: 30,
    fontWeight: 600,
    fontFamily: 'Montserrat-Bold',
    color: '#0059AC',
    alignSelf: 'center'
  },
  msg: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 500,
    fontFamily: 'Montserrat-Bold',
    color: '#0059AC',
    alignSelf: 'center'
  },
  img: {
    paddingTop: 40,
    alignContent: 'center'
  }, 
  petr: {
    marginLeft: 35,
  }, 
  backgroundBlur: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 900,
    height: 900,
    backgroundColor: 'rgb(0,0,0)',
    zIndex: 1, 
  },
  keyText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 12,
  },
  available: {
    marginRight: 5,
    width: 20,
    height: 20,
    backgroundColor: "#4BA56A",
    borderRadius: 2,
  },
  yourbooking: {
    marginRight: 5,
    width: 20,
    height: 20,
    backgroundColor: "#FFD173",
    borderRadius: 2
  },
  unavailable: {
    marginRight: 5,
    width: 20,
    height: 20,
    backgroundColor: "#D34242",
    borderRadius: 2
  },
  classicWrapper: {
    flexDirection: 'row', 
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ReserveScreen;