// There are 3 Ways to Clone the Array so that if we push any other element in original array,---
// -- does NOT affect other arrays that we are cloning.

//1st way ( by slice function), Example below

let array1=["Apple", "Orange"];
let array2=array1.slice(0); // it will start from 0 until end
array1.push("Banana")// Adding in Array 1 will not make change in Array 2 because of different address assigned to both arrays
console.log("Array1 is ", array1);
console.log("Array1 is ", array2);


//2nd Way of Cloning is through "contact"

let array3=["Hello", "World"];
let array4=[].concat(array3);
array3.push("JavaScript");
console.log("Array3 is ", array3);
console.log("Array4 is ", array4);

//3rd way is to use 3 dots ... and it is called Spread operator 
//This is the most used and popular method to use.. Example below

let array5=["My", "Name is"];
let array6= [...array5];
array5.push("Umar");
console.log("Array5 is ", array5);
console.log("Array6 is ", array6);



