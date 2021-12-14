//IMPORTANT!!

const myArray=["Apple", "Banana","Kiwi","Mango"];

//we can destructure array as below

//if we will use const it will give an error coz we cannot change const so using let

const content=myArray[0];
const content1=myArray[1];
console.log("value of variable content are:");
console.log(content,content1);

//We can do the above part as below as well

let[var1,var2]=myArray;//declaring variables in myArray
//console.log(myArray);
console.log("value of variable 1 is :" , var1);
console.log("value of variable 2 is :" , var2);

// if we need to access all the variables in array how do we do that??


let[var4,var5, ,var7]=myArray; //will skip var6 (kiwi)
console.log(myArray);
console.log("value of variable 5 is :" , var5);
console.log("value of variable 7 is :" , var7);

let[var8,var9, ...myNewArray]=myArray; //...myNewArray is storing the 3rd and 4th variable in myArray to a new Array called myNewArray


console.log(myNewArray); //it will have only 2 values and those will be Kiwi and Mango