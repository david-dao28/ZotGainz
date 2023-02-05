import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Reservation from "./Reservation";
import { useState } from "react";

function ReservationList() {
  const [reservationData, setReservationData] = useState("");

  // should be an object with the following data

  // information we need, need from ostend's form, put these in there
  const [facility, setFacility] = useState("");
  const [court, setCourts] = useState("");
  const [equipment, setEquipment] = useState("");
  const [date, setTime] = useState("");
  // Date should include hour range, day, and date

  function reservationDataHandler(enteredData) {
    setReservations(enteredData);
  }

  function addReservation(reservationData) {
    setReservations((currReservationState) => [...currReservationState]);
  }
  return (
    <View></View>

    // <View>
    //     {reservationData.map((reservation) => 
    //     <Reservation 
    //     sport={reservation.facility}
    //     courtLetter ={reservation.court} equipments={reservation.equipment} 
    //     times={reservation.date}/>)}

    // </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ReservationList;
