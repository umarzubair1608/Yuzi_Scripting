//IMPORTANT

//How to Iterate(Loop) Objects

//how to create objects--> With Curley Brackets{ key : value, key:value} 

const person = {
    Name :"Umar",
    Age : 28,
    DOB : "16 Aug 1992",
    hobbies: ["Eat","Play Cricket", "Travel","Sleep"]

}

//There are 2 ways to iterate (loop) the object
// 1). For In Loop--> it usually give index value and in here will give key only and not its value 
// 2). Oject.keys method

//1st Way Example

for(let p1 in person)
{
    //console.log(p1); //it will give the key name but not the value
   // console.log(person.p1); //it will give the undefined error instead of values of the Key so, we have to use [] method
    console.log(person[p1]); // it is not with a ["p1"] because it is created outside the object and that's why we are not using[" "],will give values
    
}

console.log("person Name is :")
console.log(person["Name"]); //see here, we are accessing object key and value with [" "]

//How to get Key and value pair both 

//We can do it with backtick template string `{} ` 

for(let p1 in person)
{
    //console.log(p1); //it will give the key name but not the value
 //  console.log(p1, ":" ,person[p1]); //This is one way Another way is given below
    console.log(`${p1}:${person[p1]}`); // it is not with a ["p1"] because it is created outside the object and that's why we are not using[" "]
    
}

// Oject.keys method Examples
console.log("Let see results with Object.keys method. Results are given below :");
console.log(Object.keys(person)); //it gives Keys of the Object but not the value yet

//We use For Of loop with Objects.keys() method

console.log("Using For Of Loop for Objects.keys() method")

for( let p2 of Object.keys(person))
{
    console.log(p2, ":",person[p2]);
}
//upper code Ends here


//Read and understand below code
const kay1="obj1";
const kay2="obj2";
const value1="myvalue1";
const value2="myvalue2";

const hello ={ };
hello[kay1]=value1 //if without " "it will take the Value of the key
//hello.kay1=value1;
hello["kay2"]=value1 //if with " "it will take the Key only
console.log(hello);


