// arrays are a collection of items.
// arrays start with the number 0. values can be any data type, separated by commas.
// denoted by []. Has access to methods.
var arr = ["thingOne", 22, true, {}, []];
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

var removedItem = arr.pop();
arr.pop();
console.log(arr);//removes the last item in the array.

//replace pop with shift. This removes the first item in the array.

//splice removes and optionally adds
var months = ['Jan', 'Feb', 'Mar', 'June'];

months.splice(2, 0, 'April');/*first number is index of the array,
second number is how many items to delete, third thing is what you want to add in the removed item's place.
If you type 0 for the second number, it doesn't delete anything. The new item will get inserted at the index*/
console.log(months);

var myArr = ['Stay', 21, true, 2004];
console.log(myArr, 'Before');

// var removedItem = myArr.splice(2, 0, false, 234, 'hello');
// console.log(myArr, 'After');
/*You can use negative integers to start from the back of the array.*/
//var removedItem = myArr.splice(-2, 1);

//Slice gives you a copy of an item in one array and then you can put that in another array.
var removedItem = myArr.slice(0, 2);/*insert beginning index and the index up to,
but not including. This will give you the first item and the second item in the array*/
console.log(removedItem, myArr);
