//Array is also an object

let fruits=['Apple','Orange','Grapes'];
fruits.push("kiwi"); // Gonna Add kiwi in the Array as last element
console.log(fruits); 

fruits.pop(); // Gonna Remove the last element from the Array , 


let poppedElement=fruits.pop(); //It removes from array but does not eliminate, you can store the popped element in another variable if required
console.log(fruits); 
console.log("Popped fruits is : "+poppedElement);