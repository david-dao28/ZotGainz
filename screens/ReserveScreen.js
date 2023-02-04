import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import axios from 'axios';

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
  })
}

const ReserveScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the ReserveScreen</Text>
      <Button
          title="Send Message"
          onPress={makeSmsApiRequest}
        />
    </View>
  )
}

export default ReserveScreen;