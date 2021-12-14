const array1=[1,2,3];
const array2=[4,5,6];

const spreadArray= [...array1,...array2]; //Will spread and shows the elements of both arrays ,works for strings 

console.log(spreadArray);

const array5=[..."abcd"];//will spread the element and make them seperate element instead of 1
console.log(array5); 



//Spread operator in Object cases



const obj1={
    car1:"Toyota",
    car2: "BMW",
    car1:"Volkswagon" //same keyname, it will override from Toyota to VolksWagon
}
console.log(obj1);
const obj2={
    car3:"XYZ",
    car2: "ABC",
    car1:"Changing now"
} 

const newobj={...obj1,...obj2}// change the value of car1 and car2 to the recently updated ones and will dispaly in the order we put 

console.log(newobj); 
//another example
const hello={..."abcd"};
console.log(hello);