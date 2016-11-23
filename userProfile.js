/*
With the userAge variable, we can ensure that the user has entered their age correctly. 
Use a pop-up window function to confirm the user entry:
Create a while loop that will continue to execute as long as the user has not entered the correct age. 
Inside the loop, provide a confirmation that the age has been entered correctly:
*/
var ageIsCorrect = false;
while(ageIsCorrect == false){
  var userAge = prompt("What's your age, user?");
  if(confirm("You entered "+userAge+". Is this correct?")){
    ageIsCorrect = true;
    alert("Great! Your age is logged as "+userAge+".");
  }
}
