// Declare Object
var student1 = {id:121, phone:1748, name:"Abir"};
var student2 = {id:224, phone:4589, name:"Nahin"};
console.log(student1);

// specifay one single property from object with 3 different  examples 

var phoneNo1 = student1.phone; // 1
console.log(phoneNo1);

var phoneNo2 = student2["phone"]; // 2
console.log(phoneNo2);

// type 3 have some differces so it will hang it out later


// update property value old to new
// 1 example with phone number property
// here will change the student phonenumber old to new

student2.phone = 5874102; // 1
console.log(student2);

student2["phone"] = 888888; // 2
console.log(student2);


//for type 3 we need a spacial variable here the example "for spacify" 

var phoneProNumber = "phone"
var phoneNo3 = student2[phoneProNumber];  // type 3
console.log(phoneNo3);



