/*There are 6 types of data:
  string, number, boolean, undefined, null, ______
  */
  var sentence = "hello, nice to meet you";
        console.log (sentence);
/*you have to define everything in javaScript
use quotes around your words to make a string*/
/*use numbers for data type*/
var sentence = 2;
      console.log (sentence);

/*boolean is true/false yes/no open/close 1/0
if something exists, boolean comes back as true*/

var yes = true;
    console.log (yes);

/*undefined is used in a variable when you declared something, but JS doesn't know what it is. a booboo
null is when it doesn't exit in the code.*/

//blocks are little more than grouped code that are (almost always) inside two curly braces
{

}
//blocks can be infinately nested inside each other
{//block A
  {//block B
    {//block C

    }
  }
}
//When you generate a block of code it forms something called scope

/*variables in three ways:
  var, let, const
*/

var firstNumber = 22;//declaration and definition
//or
var firstNumber;//declaration
firstNumber = 22;//definition

var secondNumber = 11;
console.log(firstNumber*secondNumber);
/*3 rules for var:
  1. var can be declared and defined on one or two lines
  2. var declarations are hoisted, but not definitions. Can go outside of scope
  3. you can redefine var */
/*pointers point to a spot in memory*/
/*let does not get hoisted. This is so that you don't accidently replace the
 first variable with the same variable name,but with different definition. You get an undeclared.
 You can use one line or two. Does not leave it's scope
*/
let thirdNumber = 22;
console.log(thirdNumber);
/*if you do secondNumber = 12, the code will revert to var.*/

const truth = 'Ep. 8 was alright';
console.log (truth);
/*const doesn't get hoisted. You cannot redefine const in the same block. You can redefine in a different block*/

//There are many types of objects. Methods. Operations
//new is a keyword in js that cannot be changed. It is a reserved term. Don't use new in your naming
let rightNow = new Date();
console.log(rightNow);

var iLikePi = Math.PI;
console.log(iLikePi);

var newString = new String("lalallaa");
console.log(newString , String);

var number = 6;
var objNumber = new Number(6);

console.log(Number);
console.log(objNumber);

/*Arrays are a collection of values*/
var fruit = ['apple','banana']; //declared with squared brackets
var myArray = ["Hello World", 22, true, {}, null];
console.log (myArray.length);

var myObject = {
  myString: "Hello World",
  magicNumber: 22
};
/*objects have to have key object pairs. Separate each object with a comma.
console.log doesn't load until the message is clicked away*/

//window.alert >> used to get alerts without user feedback

//let alertMessage = alert("Hey, there! My book is only $9.99...");

//let confirmMessage = confirm("Is your name Jesus?");
/*confirm allows you to obtain information from the user*/
//let promptMessage = prompt("Tell me the password...","password");
//used for letting the user imput data. Empty "" is the default into the text box.
//console.log(promptMessage);

/*alert, confirm, and prompt are functions*/

//Logic Operators
const bestNumber = 42;
console.log(!bestNumber);
/*not >! recognizes that there is something,
but nothing attached to it. If returns false, then it is truthy, if returns true, then it is falsy
It is checking if there is not something there "is there something not there?"*/

/*Things either return as Truthy or Falsy. If it exists, then it will return true.
If doesn't exist, returns false*/

/*falsy things: false, 0, "", */

//console.log(!firstName || !lastName);

//comparison Operators
var string = "1";
var number = 1;
console.log(string == number);//will return true because it is loose. Looking for value.
console.log(string === number);//will return false because it is strict. It is looking for type and value

// loose not equal !=
//strict not equal !==
//two vars with two objects that have the same value cannot be strictly equal to each other

var something = "Something";
var somethingElse = new String("Something");
console.log(something == somethingElse);
console.log(something === somethingElse);

var primitive = "Hello World";
var stringObject = new String("Hello World");
console.log(primitive == stringObject);
console.log(primitive === stringObject);
console.log(primitive.length);//only changes to an object temporarily just to do it's computation
console.log(typeof(primitive));
console.log(typeof(stringObject));

//Arithmetic Operators
console.log(12-33);
var number1 = 12;//js assumes you mean a number when you have a number inside quotes
var number2 = 780;
console.log(number1*number2);

//modulo(%) gives you the remainder

console.log(number1 % number2);
console.log(780%12); //comes back as 0. There is no remainder. It divides evenly
//js will come back as NaN if you try to declare a value that is not a number
NaN === NaN //comes back false because they are objects

//Assignment Operators
number1 += 12;
console.log(number1);

number1 = new Number(number1);
number2 = new Number(number2);
number1 = parseInt(10);
number2 = parseInt(10);
console.log(number1 + number2);

//console flow
//if/else
//const bestMovie = 'string';
/*if(typeof(bestMovie) ==='string') {
  alert('Yay its a string');
  }

else if(typeof(bestMovie) === 'number') {
  alert('You gave me a number');
  }

  else {
  alert("It's not a string or a number");
}//do not need a semicolon at the end of an if/else statement*/

//switch statement: used for many many conditions
/*switch(typeof(bestMovie)) {

  case 'string'://use colon in switch statement
    alert("Yay it's a string");
    break;//like the end curly brace.

  case 'number':
    alert("Yay it's a number");
    break;

  case 'boolean':
    alert("Yay it's true");
    break;

  case 'object':
    alert("Yay it's an object");
    break;

  default:
    alert("it's an array");//the array will be changed into an object because array is not a primitive. Anything that is not a primitive is automatically an object.
    break;//add default at the end of the switch statement
}
*/
//Ternaries (do not nest them). Best time to use it is when you have a simple true/false statement.

const bestMovie = [];
bestMovie !== undefined ? alert('it exists!') : alert('It doesn\'t exist!');
//only put ; at the very end of the ternarie

//edge casing: check to see if a person can incorrectly imput something such as a number when it was supposed to be a string.
