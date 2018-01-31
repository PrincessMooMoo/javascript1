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

//anonymous fn that takes 2 args and is assigned to a var
var userLogin = function(username, password) {

};

//named function that takes 2 arguments
function myMagicFunction(argument1, argument2) {
  console.log(`${argument1} is better than ${argument2}`);
};

myMagicFunction("Star Wars", "Star Trek"); //you defined them when you call them
