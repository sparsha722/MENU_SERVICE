//const {WebhookClient} = require('dialogflow-fulfillment');
//const functions = require('firebase-functions');
//const {dialogflow} = require('actions-on-google');
var moment = require('moment');

const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';
const MENU_INTENT = 'Menu';

const app = dialogflow();

app.intent('WELCOME_INTENT', (convo) => {
  convo.ask("Hi ! Welcome to MENU SERVICE");
});

app.intent('FALLBACK_INTENT', (convo) => {
  convo.ask("Sorry can you say that again");
});

app.intent('MENU_INTENT', (convo) => {
var date= new Date();
  var current_time=date.getHours();
  var st1=moment('8:00 am', "HH:mm a");
  var et1=moment('10:00 am', "HH:mm a");
  var st2=moment('12:30 pm', "HH:mm a");
  var et2=moment('3:00 pm', "HH:mm a");
  var st3=moment('5:00 pm', "HH:mm a");
  var et3=moment('7:00 pm', "HH:mm a");
  if(current_time.isBetween (st1,et1))
  {
    convo.ask("Breakfast in available now. Check out our breakfast menu!");
  }
  else if(current_time.isBetween (st2,et2))
  {
    convo.ask("Lunch is avilable now.Check out our Lunch menu!");
  }
  else if(current_time.isBetween (st3,et3))
  {
    convo.ask("Snacks are available now.Check out our Snacks menu!");
  }
  else
  {
    convo.ask("Nothing is available now sorry");
  }
  
});


    
  exports.dialogflowFirebaseFulfillment = functions.https.onRequest (app);
    
           
           
