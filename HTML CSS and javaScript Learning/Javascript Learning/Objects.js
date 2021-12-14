//how to create objects--> With Curley Brackets{ key : value, key:value} 
//Keys are also called properties
//value can be String, number, Array
//to access the data you use object.xx  There is another way given below
//Arrays can be added in objects

const person ={Name:"Umar", Age : 28, hobbies :["Eat","Play Cricket","Watch Movies","Sleep"]}
console.log(person.Name);
console.log(person.Age);
console.log(person.hobbies);

//How to Add key value Pair to Object??

person.gender="Male";
console.log("New Object Properties now is")
console.log(person);

//Another way to access data from Objects

//To access data from object with square bracket 
// objectName[ "Key/Property Name"] but it should be with " " inside the [] otherwise it will give an error

//Example below
console.log(person["Age"]);

//Difference between . and [] to access object data

//if sometimes there is a key with space, we cannot access it with dot. but to use it in [] we have to declare them with " "

//Example  "full name" : "Umar Zubair" above in object

// person.full name(); //it will give an error

///////////////// ------------------------------------------------------------------------------//////////////////////////////////////

//With Key we do not have to use " " within []
const key = "Email";
person[key]="umarzubair1608@gmail.com"
console.log(person);


