//Leap year Math calculation
//This example below is for % if ans = 0 Then leapyer
// Another example will be with "/" if ans = pure number Then will be leapyear
const year = 3039;
let reminder = year%4;
if (reminder == 0){
    console.log("This is a leap year");
}
else{
    console.log("This isn't a leap year")
}

// leap year with function

function isLeapYear(year){
    
const reminder = year%4;
if (reminder == 0){
    return true;
}
else{
    return false;
}

}

const check2000 = isLeapYear(2000);
console.log(check2000);

