let firstName="Umar     ";
console.log(firstName[3]); //indexing starts from 0
console.log(firstName.length); // include spaces as well
console.log(firstName.trim()); 
let newString=firstName.trim();
console.log(newString);
console.log(newString.length);
//  ToUpperCase String function

console.log("Printing My Name  in Upper case "+ " : "+newString.toUpperCase());

// ToLowerCase String Funtion 

console.log("Printing My Name  in Lower case "+ " : "+ newString.toLowerCase());

//Slice starts from 0 index and does not include the last index value-- see example below

console.log(newString.slice(0,2));

//if we put only 1 value, it would slice the no. and print after that-- see example below

console.log(newString.slice(2));
//type of data returns datatype i.e. string, number, boolean
console.log(typeof firstName);

// Template String--) you add ${} within backticks `  ` and get the variable name in their. See Example below

let Car="Toyota";
let Model="Corolla";
let result=`My Car name is : ${Car} and my car Model is ${Model}`;
console.log(result);





