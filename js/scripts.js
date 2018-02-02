// arrays are a collection of items.
// arrays start with the number 0. values can be any data type, separated by commas.
// denoted by []. Has access to methods.
//var arr = ["thingOne", 22, true, {}, []];
//  console.log(arr[1], arr[3]);//the number is the index. It is calling for that particular data item in the array
//
// var favThings = ["Guardians of the Galaxy Vol. 2", 17, "Do you like Star Wars?", "When did you graduate from high school?"];
// alert(favThings[1]);
// confirm(favThings[2]);
// prompt(favThings[3], "Your answer");
//
// var moreThings = ["Cherries", 2, false, 2003];
// console.log(moreThings, moreThings[2]);
//
// console.log(typeof(moreThings));
// console.log(Array.isArray(moreThings));

//how to add code to our array
// var bestTeacher = prompt("Who is the best teacher?", "Herren");
// arr.push(bestTeacher);
// //console.log(arr);//Whatever you entered into the prompt is added to var arr.
//
// arr.unshift(bestTeacher);
// //console.log(arr);

/*var removedItem = arr.pop();
arr.pop();
console.log(arr);//removes the last item in the array.

//replace pop with shift. This removes the first item in the array.

//splice removes and optionally adds
var months = ['Jan', 'Feb', 'Mar', 'June'];

months.splice(2, 0, 'April');/*first number is index of the array,
second number is how many items to delete, third thing is what you want to add in the removed item's place.
If you type 0 for the second number, it doesn't delete anything. The new item will get inserted at the index*/
// console.log(months);
//
// var myArr = ['Stay', 21, true, 2004];
// console.log(myArr, 'Before');
//
// // var removedItem = myArr.splice(2, 0, false, 234, 'hello');
// // console.log(myArr, 'After');
// /*You can use negative integers to start from the back of the array.*/
// //var removedItem = myArr.splice(-2, 1);
//
// //Slice gives you a copy of an item in one array and then you can put that in another array.
// var removedItem = myArr.slice(0, 2);/*insert beginning index and the index up to,
// but not including. This will give you the first item and the second item in the array*/
// console.log(removedItem, myArr);

// var userName = prompt("What is your name?", "My name is...");
// var favColor = prompt("What is your favorite color?", "My favorite color is...");
//
// var colorOptions = ["red", "orange", "yellow", "blue", "green", "pink", "purple", "white", "black", "gray"];
//
// switch (favColor = favColor.toLowerCase()) {
//   case "red":
//     alert("Red is the color of passion " + userName + ".");
//     break;
//
//   case "orange":
//     alert(userName + " must like eating oranges.");
//     break;
//
//   case "yellow":
//     alert("You must be a cherry person, " + userName + ".");
//     break;
//
//   case "blue":
//     alert("Blue is the sky on a nice, clear day " + userName + ".");
//     break;
//
//   case "green":
//     alert(userName + " is on the green team.");
//     break;
//
//   case "pink":
//     alert(userName + ", that is my favorite color!");
//     break;
//
//   case "purple":
//     alert(userName + ", I am not a fan of purple.");
//     break;
//
//   case "white":
//     alert("White is the absence of color, " + userName);
//     break;
//
//   case "black":
//     alert("I feel the goth flowing through your veins, " + userName);
//     break;
//
//   case "gray":
//     alert("I am so sad " + userName);
//     break;
//
//     default:
//     alert("You must be a multi-colored unicorn " + userName);
// }
//favColor = favColor.toLowerCase();

/*string interpolation
example 1: ("This is a string " + myName). This is the old way, used in ES5.

example 2: use backticks for quotes. Found under the tilda.
(`Hey there, ${firstName} it looks like you love ${favColor} and your last name is ${lastName}.`); Works in ES6
*/


/*How to check for something inside an array
var bearts = ['ant','bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
It will only tell you that the item you are searching for exists.
if the thing doesn't exist, then the output will be -1*/

/*var arr = [1, 2, 3, 4, 5];
if(arr.indexof(6) !== -1) {
do some logic here
} else {
do some err checking here
}*/


/*lastIndexOf
-----------------------------------------------------------------
starts at the end of the array and looks for the item*/

/*reverse() takes everything in the array and reverse it
var array1 ['one, 'two', 'three'];
var reversed = array1.reverse();
console.log(array1);
console.log(reversed);   You must have declared a variable that is the reverse of the array
*/

/*.sort()
------------------------------------------------------------------------------
var months = ["March", 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); expected output: Array ['Dec', 'Feb', 'Jan', 'March']

var array1 = [1, 30, 4 ,21];
array1.sort();
console.log(array1); expected output: Organizes things alphabetically or numerically or unicode if it is a mix of numbers and strings*/

/*arr.sort([compareFunction]) This is where you can declare the order of the sort*/

/*multi-dimensional array
----------------------------------------------------------------------------
    var favoriteMovie = ['Star Wars VI', '1983'];
    var secondFavorite = ['Return of the King', '2003'];
    var thirdFavorite = ['Equilibrium', '2002'];
    var myFavoriteMovies = [];
    myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
    //Result:
    [['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];

    if you want just the years:

    var movieYears = [];
movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1],myFavoriteMovies[2][1]);
alert(movieYears); The first index number is the first item of the array, second number is the second item in the array of the array.
*/

// var favoriteMovie1 = ['Pirates of the Carribean', 'Jack Sparrow'];
// var favoriteMovie2 = ['Lord of the Rings', 'Frodo Baggins'];
// var favoriteMovie3 = ['King Kong', 'King Kong'];
// var favoriteMovie4 = ['Guardians of the Galaxy', 'Starlord'];
// var favoriteMovie5 = ['Django Unchained', 'Django'];
// var myFavoriteMovies = [];
// myFavoriteMovies.push(favoriteMovie1, favoriteMovie2, favoriteMovie3, favoriteMovie4, favoriteMovie5);
// console.log(myFavoriteMovies);
// var favMovieTitles = [];
// favMovieTitles.push(myFavoriteMovies[4][0], myFavoriteMovies[2][0], myFavoriteMovies[0][0], myFavoriteMovies[1][0], myFavoriteMovies[3][0]);
// alert(favMovieTitles);

/*-------------------------------------------------------------------------
loops
store and manipulate data.
*/

// while loop
// --------------------------------------------------------
// creates a loop that executes a specified statement as long as the test conditions evaluates to true. The condition is evaluated before executing the statement.

// let i = 0;
// while (i < myFavoriteMovies.length) { //you can use any name for the i
//   console.log(myFavoriteMovies[i]);
//   i++;
// }


//for loop: most popular and lest memory intensive
// var str = '';
// for (var i = 0; i < 9; i++) {
//   str = str + i;
// }

// for (var i = 0; i < myFavoriteMovies.length; i++) {
//   console.log(myFavoriteMovies[i]);
// }

//documentation for-loop ([initialization]; [condition]; [final-expression]); If you omit one of these documentations, use break.

/* do while loop
  var result = '';
  var i = 0;
  do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);
*/
// var i = 0;
// do {
//   console.log(favMovies[i]);
// } while (i < favMovies.length);

//
// for(let i = 0; i < myFavoriteMovies.length; i++) {
//   if (myFavoriteMovies[i][0] === "Lord of the Rings") {
//   alert(`${myFavoriteMovies[i][0]} is my favorite movie with ${myFavoriteMovies[i][1]}.`);
//   }
// }
