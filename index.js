'use strict';
 
const {WebhookClient} = require('dialogflow-fulfillment');
const functions = require('firebase-functions');
const {dialogflow} = require('actions-on-google');

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
  //var st1=date('8:00 am', "HH:mm a");
  //var et1=date('10:00 am', "HH:mm a")
  if(current_time.isBetween (8,10))
  {
    convo.ask("Breakfast in available now. Check out our breakfast menu!");
  }
  else if(current_time.isBetween (12,15))
  {
    convo.ask("Lunch is avilable now.Check out our Lunch menu!");
  }
  else if(current_time.isBetween (17,19))
  {
    convo.ask("Snacks are available now.Check out our Snacks menu!");
  }
  else
  {
    convo.ask("Nothing is available now sorry");
  }
  
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest (app);
    
           
           
