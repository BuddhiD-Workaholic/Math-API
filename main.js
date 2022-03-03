
function ask2() {
  var a = Math.floor(Math.random() * 10000) + 1;
  return a;
}

function ask1() {
  var a = Math.floor(Math.random() * 1000) + 1;
  return a;
}

function ask() {
  var a = Math.floor(Math.random() * 100) + 1;
  return a;
}


var question = ("  " + ask() + "  " + operations[Math.floor(Math.random() * 4)] + "  " + ask() + "  " + operations[Math.floor(Math.random() * 4)] + "  " + ask() + "  " + operations[Math.floor(Math.random() * 4)] + "  " + ask())
var Answer = [ask() + operations[Math.floor(Math.random() * 4)] + ask() + operations[Math.floor(Math.random() * 4)] + ask() + operations[Math.floor(Math.random() * 4)] + ask()];

var operations = ['+', '-', '/', '*'];
var times = 5;
var as;
var operat;
var question = "";
var answer=0;


console.log("Question : " + question);