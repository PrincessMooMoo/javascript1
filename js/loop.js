// var thisFriday = prompt("What do you need to do this Friday?", "I want to...");
// var thisSaturday = prompt("What do you need to do this Saturday?", "I want to...");
// var thisSunday = prompt("What do you need to do this Sunday?", "I want to...");
// var thisWeekend = [];
// for (var i = 0; i < 1; i++) {
//   thisWeekend.push(thisFriday, thisSaturday, thisSunday);
//   console.log(thisWeekend);
// };
// // var n = 0;
// //
// // while (n < 3) {
// //   n++;
// // }
// //
// // console.log(n);
//
// var lengthOfTasks = [];
// var longestTask = prompt("Which day has the longest task?");
// var mediumTask = prompt("Which day has the next longest task?");
// var shortTask = prompt ("Which Day has the shortest task?");
//
// for (var i = 0; i < 1; i++) {
//   lengthOfTasks.push(longestTask, mediumTask, shortTask);
//   console.log(lengthOfTasks);
// };
// var thisWeekend1 = prompt("What are you doing this weekend?");
// var thisWeekend2 = prompt("What else are you doing this weekend?");
// var thisWeekend3 = prompt("Just give me one more thing you are doing this weekend.");
//
// var todo = [];
// todo.push(thisWeekend1, thisWeekend2, thisWeekend3);
//   console.log(todo);
//
// var todoWhen = [];
// for (i = 0; i < 1; i++) {
//   todoWhen.push(todo[1]+[" on Saturday"], todo[0]+[" on Friday"], todo[2]+[" on Sunday"]);
//   console.log(todoWhen);
// }
//
// var n = 0;
//
// while (n < 3) {
//   n++;
// };
//   console.log(todo[0]);
//
// var result = [];
// var x = 0;
//
// do{
//   x = x + 1
//   result.push(todoWhen[0]+ [" not done"], todoWhen[1] + [" done"], todoWhen[2] + [" done"]);
// } while (x < 1);
//
// alert(result);

//step 1
var todos = [];
var todoOne = prompt('What do you want to do this weekend?');
var todoTwo = prompt('What else do you want to do this weekend?');
var todoThree = prompt('What is a third thing you want to do this weekend?');

todos.push(todoOne, todoTwo, todoThree);

//step 2
var todosWithDays = [];
for(let i = 0; i < todos.length; i++) {
  var due = prompt(`What day do you want to get ${todos[i]} done?`, `Please use this format: day/month/year`);
  due = new Date(due); //JS date object
  todoWithDays.push([todos[i], due]);//and array with the todo item and date.
};

//step 3
var sortedWithIndices = [];
let j = 0;
var now = new Date().getTime();//converts js date object to milliseconds

while (j < todosWithDays.length) {
  let oneDay = 24 * 60 * 60 * 1000; //hours*minutes*seonds*milliseconds. This is the length of a day
  var diffDays = Math.round((todosWithDays[j][1].getTime() - now)/oneDay);
  sortedWithIndices.push([diffDays, todosWithDays[j]]);
  j++;
};

sortedWithIndices.sort();

console.log(sortedWithIndices[sortedWithIndices.length - 1][1], ' will take the longest');

//step 4
let n = 0;

do {
  if(n != sortedWithIndices.length - 1) {
    sortedWithIndices[n][1].push("done");
  }
  n++
} while(n , sortedWithIndices.length);

let alertArr = [];
for(let i = 0; i < sortedWithIndices.length; i++){
  if(sortedWithIndices[i][1].indexOf('done') !== -1 {
    alertArr.push(sortedWithIndices[i][1]);
  }
}

//step 5
alert(alertArr);
