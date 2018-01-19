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
var fruit = ['apple','banana'];
