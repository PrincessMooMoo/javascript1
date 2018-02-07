/*functions are one of the fundamental building blocks in JS. a set of statements that perform a task.
take something, change it, and spit it back

example .toUpperCase()
console.log() everything that is inside the () is called an argument. Things that are passed into the function*/

/*funtion square(number) {
  return number * number;
}*/

//anonymous function with 0 arguments
// function() {
//   console.log('You fired your anonymous function');
// };

// //anonymous fn that takes 2 args and is assigned to a var
// var userLogin = function(username, password) {
//
// };

//named function that takes 2 arguments
// function myMagicFunction(argument1, argument2) {
//   console.log(`${argument1} is better than ${argument2}`);
// };
//
// myMagicFunction("Star Wars", "Star Trek"); //you defined them when you call them

//functions can be declaration or epression. Difference is that hoisting only works for a function declaration.

// //function expression:
// var logStuff = function(param) {
//   console.log{`${param} was passed in`);
// };
//
// //fuction declaration:
// function multiply (num, secondNum) {
//   return num * secondNum;
// };

//scoping/closure: variables declared inside can't be seen outside, but inside can access all variables declared in the same/parent scopes.


// function callMyself(number) {
//   if(number >= 0) {
//     number--;
//   } else {
//     callMyself(number);
//   } else {
//     return
//   }
// }

//arrow functions. ES6. are annonymous

//does not have the function keyword. Instead, it's a fat arrow =>
// (param1, param2, param3, ..., paramN) => { statements }
//(param1, param2, param3, ..., paramN) => expression (only use this for one thing. An alert or return)
//singleParam => { statements }
//
// (number) => {
//   if(number >= 0){
//     number--;
//     console.log(number);
//   } else {
//     return //similar to break. Stops the function and goes back out of the scope. parent or global scope.
//   }
// }
//
// function givesMeBestNumber(number) {
//   if(number === 42) {
//     return `${number} is the best number!`;
//   } else {
//     alert(`${number} sucks!`);
//   }
// }
// let message = givesMeBestNumber(42); //the varliable is calling this function.
// alert(message);
//
// alert(givesMeBestNumber(42));

// const dogAge = prompt("How old is that dog?", 3);
//
// function calcDogYears(age) {
//   parseInt(age);
//   if(isNaN(age)) {
//     //if the user gives me a non-number...
//     calcDogYears(prompt('Please give a NUMBER', '10'));
//   } else {
//     alert(age *= 7);
//   }
// }
// calcDogYears(dogAge);
//
// //method vs. functions
// //functions must be called. Must have a value in the parenthesis
// //methods can have the parenthesis empty. Attached to objects with a .
// //
// // var myString = "lalalala";
// // myString.toUpperCase();
//
// const humanAge = prompt('How old are you?', 18);
// const product = prompt('How much product do you use per day?', 1);
//
// function lifeSupply(age , productPerDay) {
//   parseInt(age);
//   if(isNaN(age)) {
//     lifeSupply(prompt('Please give a NUMBER for your age', "18"));
//   } else {
//     parseInt(productPerDay);
//     if(isNaN(productPerDay)) {
//       lifeSupply(prompt('Please give a NUMBER for the amount of product used per day', "1"));
//     }
//     alert(humanAge * product * 365);
//   }
// }
//
// lifeSupply(humanAge, product);

// fuction calcLifetimeSupply(age, perDay) {
//   return (80 - age * (365 * perDay);
//   let testArr = [age, perDay];
//   if(testForInts(testArr)) {
//     var lifeTime = (80 - age) * (365 * perDay);
//     alert(`you will need ${lifeTime} ${supplyOf} to last until you're 80.`);
//   } else {
//     var age = prompt('How old are you?');
//     var daily = prompt('How much o you use per day?');
//     lifeTime = calcLifetimeSupply(age, daily);
//   }
// }
//
// var supplyOf = prompt('What do you want a lifetime supply of?', "hamburgers");
// var age = prompt("How old are you?");
// var daily = prompt("How much do you use per day?");
// var lifeTime;
// alert

//
// var age = prompt("How old are you?");
// var perDay = prompt("How much of your favorite product do you use per day?");
//
// function calcLifetimeSupply(humanAge, product){
//   var death = 80 - humanAge;
//   var lifetimeSupply = death * product * 365;
//   alert(`You will need ${lifetimeSupply} to last you for ${death} years.`);
// }
//
// calcLifetimeSupply(age, perDay);

// var num = prompt('Enter a number you like for the base');
// var power = prompt('Enter a number you hate for the power');
// function calcNumber(){



  // switch (true) {
      case (!isNaN(parseInt(num)) && !isNaN(parseInt(power))):
      alert(Math.pow(parseInt(num), parseInt(power)));
      break;

      case (isNaN(parseInt(num)) && !isNaN(parseInt(power))):
      num = prompt("Hey! Please enter a number for the base");
      alert(Math.pow(parseInt(num), parseInt(power)));
      break;

      case (!isNaN(parseInt(num)) && isNaN(parseInt(power))):
      power = prompt("Yo! Please enter a number for the power");
      alert(Math.pow(parseInt(num), parseInt(power)));
      break;

      default:
      alert("We are going to try this again from the beginning ok?");
      num = prompt("Hey! Please enter a number for the base");
      power = prompt("Yo! Please enter a number for the power");
        alert(Math.pow(parseInt(num), parseInt(power)));
    }
  }
// calcNumber(num, power);
// calcNumber();

let aString = 'alex';
let capName = aString.charAt(0).toUpperCase() + aString.slice(1);
capName += ".";
console.log(capName);
//console.log(Math.pow(n, 2));
//return Math.pow(n,2);

//s = s.toString();
// //if(s.charAt(s.length -1) === ".") {
//   console.log(newStr);
// }else {
//   newStr += '.';
//   }
// }

// takeAString(stringy);
// function flipHaves(a) {
//     var index = Math.round(a.length / 2); represents the middle index of the string
//     return a.substring(index) + a.slice(0, index);
// } substring takes index to the end of the string

// var report = flipHalves(stringy); //using a var to store a function
// console.log(report);

function isPalindrome(s) {
  var reversed = s.split('').reverse().join('');//slipt makes evert letter in the string in an array
  if(s === reversed) {//Join makes the arrays back into a string
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(stringy));
