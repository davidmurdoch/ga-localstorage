// well, at least it has a test?

var gaLocalStorage = require("./index.js");

var control = "+function(l,e){(ct=this[GoogleAnalyticsObject='ct']||function(l,e){(ct.q=ct.q||[]).push(arguments)}).l=+new Date,l=document.createElement('script'),l.src='//www.google-analytics.com/analytics.js',(e=document.getElementsByTagName('script')[0]).parentNode.insertBefore(l,e);try{localStorage.setItem(ct.l,ct.l),l=localStorage.getItem(ct.l)-ct.l,localStorage.removeItem(ct.l)}catch(l){};ct('create','UA-1234567-89',l?{}:{clientId:localStorage.clientId,storage:'none'}),ct(function(l,e){localStorage.clientId=l.get('clientId')}),ct('send','pageview')}()";
var result = gaLocalStorage("UA-1234567-89");

console.log(result === control ? "Success" : "Failed");