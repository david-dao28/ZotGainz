// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACb4641e768a2c70f02bf98515ba87a2e0';
const authToken = '90b89689af72ef5c3d4afe13b6a6e0e7';
const express = require('express');
const port = 3000;
const client = require('twilio')(accountSid, authToken);
const app = express();

app.use((req, res, next) => {
  // Gives your application full access to the server
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
})

app.get('/sms', (req, res) => {
  res.send('Sending message...');
  sendSms();
});

const sendSms = () => {
  client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13608615820',
     to: '+19494452278'
   })
  .then(message => console.log(message.sid));
}

app.listen(port, ()=> console.log(`ZotGainz listening on port ${port}!`))
