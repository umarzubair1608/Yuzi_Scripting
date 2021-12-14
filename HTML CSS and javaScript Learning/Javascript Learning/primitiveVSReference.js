//Primitive vs Reference Data Type            Reference Data Type (Very Important to understand)

let num1=6;
let num2=num1;
console.log("Value of num1 is :" , num1);  //Primitive type
console.log("Value of num2 is :" , num2); //Primitive type
num1++; //Q's?? What is the value for num2 now???
console.log("After incrementing num1, New Value is :", num1); ////Primitive type
console.log("After incrementing num1, New Value is :", num2);////Primitive type


//Reference Type  is Different --> Array is a Reference Type and we will try the same upper example with Reference type

//Array

let array1=["item1,item2"];
let array2=array1; //same address assigned to both arrays and the pointer will point to same address in the heap
console.log("Array1 is : ", array1); //Reference type
console.log("Array1 is : ", array2);//Reference type
array2.push("item3")//Q's?? What is the value for array1 now???
console.log("After pushing element to array1 ");
console.log("Array1 is : ", array1); //Reference type   //it is now pushing item3 in array1 
console.log("Array1 is : ", array2);//Reference type //Imp.. //it is also pushing item3 in array2 because of same address assigned to both arrays


//So, In Reference Data Types--> If change in 1 array it will update any changes in Array 2 that is linked with it (i.e. Array1=Array2)