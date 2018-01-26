/*const firstName = prompt("What is your first name?","First");
const lastName = prompt("What is your last name?", "Last");
console.log(firstName);
alert(lastName);
let birthday = prompt("What's your birthday?", "Please answer in following format 1/1/1900");
confirm(new Date(birthday));
console.log(!firstName && !lastName);*/

var userAge = confirm('Are you over 18?');

if(userAge == true) {
  underEighty = confirm("Are you under 80 years old?");
  if(underEighty) {
    var starWars = confirm("Do you like Star Wars?", );
    if(starWars) {
      alert("You rock");
    }else{
      alert("You make me sad.");
    }
  } else {
    confirm("Do you like prunes?");
  }
}else{
  alert("You're not old enough..That's great kid, don't get cocky");
}
