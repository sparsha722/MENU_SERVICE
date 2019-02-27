var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(( extended: true)));
var path = require("path");
var server = require('http').createServer(app);
var io= require('socket.io')(server);
var moment= require("moment");

app.post('/webhook',function (req,res) {
	console.log('Received a post request');
	if(!req.body) return res.endStatus(400)
		res.setHeader('Content-type','application/json');
	console.log('here is the post request from Dialogflow');
	console.log('req.body);
	console.log('get MealType parameter from Dialogflow'+ req-body.queryResult.parameters['MealType']);
	var mtype = req.body.queryResult.parameters['MealType'];
	var m = MENU(mtype);
	let response = " ";
	let responseObj={
		                "fulfillmentText":response
						,"fulfillmentMessages":[{"text":("text": [m])}]
						,"source":""
	console.log('Here is the response to Dialogflow');
	console.log(responseObj);
	return res.json(responseObj);
}}

var apiKey = 'HepFpD2PjjH1p5xs7YpE';
var result  

function cb(err,response,body) {
	if(err){
		console.log('error',error);
	}
	var date= new Date();
	var current_time=date.getHours();
	var st1=moment('8:00 am', "HH:mm a");
  var et1=moment('10:00 am', "HH:mm a");
  var st2=moment('12:30 pm', "HH:mm p");
  var et2=moment('3:00 pm', "HH:mm p");
  var st3=moment('5:00 pm', "HH:mm p");
  var et3=moment('7:00 pm', "HH:mm p");
  if(current_time.isBetween (st1,et1))
  {
    result= "Breakfast in available now. Check out our breakfast menu";
  }
  else if(current_time.isBetween (st2,et2))
  {
    result= "Lunch is avilable now.Check out our Lunch menu";
  }
  else if(current_time.isBetween (st3,et3))
  {
    result ="Snacks are available now.Check out our Snacks menu";
  }
  else
  {
    result= "Nothing is available now sorry";
  }
}
  
function MENU(mtype){

var sheetsu = require('sheetsu-node')
var client = sheetsu({ address:'https://sheetsu.com/apis/v1.0su/06c4a7a88687' })

if(queryResult.parameter['Lunch'])
{
	client.read({limit:10, sheet:"Sheet1"}).then(function(data)) {
		console.log(data);
	},function(err) {
		console.log(err);
	});
}
if(queryResult.parameter['Breakfast'])
{
	client.read({limit:10, sheet:"Sheet2"}).then(function(data){
		consoleole.log(data);
	},
	function(err){
		console.log(err);
	});
}
if(queryResult.parameter['Snacks;])
{
	client.read({limit:10, sheet: "Sheet3"}).then(function(data) {
		console.log(data);
	}, function(err){
		console.log(err);
	});
}}
return result;
