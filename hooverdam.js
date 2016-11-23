/*
The people at the Hoover Dam have called you back, and would like a program that shows what happens
when only the even numbered turbines are turned on. And they want it all in just one for loop.
-Generators 1 through 4 produce 62 MW.
-Generators 5 through 19 produce 124 MW.
*/
var totalGen = 19;
var totalMW = 0;
for (var generator = 1;turbine <= totalGen; generator++){
  if(generator % 2 == 0){
    if(generator < 5){
      totalMW += 62;
      console.log("Generator #"+generator+" is on, adding 62 MW, for a total of "+totalMW+" MW!");
    }else{
      totalMW += 124;
      console.log("Generator #"+generator+" is on, adding 124 MW, for a total of "+totalMW+" MW!");
    }    
  }else{
    console.log("Generator #"+generator+" is off.");
  }
}
