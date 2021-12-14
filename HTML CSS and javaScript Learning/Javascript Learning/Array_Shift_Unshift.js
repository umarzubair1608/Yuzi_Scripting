
let fruits=['Apple','Orange','Grapes'];
fruits.unshift("kiwi"); // Gonna Add kiwi in the Array as First element
console.log(fruits); 

fruits.shift(); // Gonna Remove the First element from the Array , 
console.log(fruits);

let shiftedlement=fruits.shift(); //It removes from array but does not eliminate, you can store the shift element in another variable if required
console.log(fruits); 
console.log("shifted fruits is : "+shiftedlement);