console.log("Let's Learn about Nested Destructuring");
//Object inside Array
//Very useful in Real World Apps
const users=[

    {userId:1,username:"Umar",userAge:29,usergender:"Male"},
    {userId:2,username:"Alia",userAge:21,usergender:"Female"},
    {userId:3,username:"Qasim",userAge:23,usergender:"Male"},
    {userId:4,username:"Maryam",userAge:25,usergender:"Female"},
]


//outside is array and inside is object 

//So usually we make array destructur as : let[x,y]=users; 
const[user1,user2,user3]=users;
console.log(user1); //will give details of user 1 @ 0, 1 ans 2nd index

// because it is nested and has object inside array so will go as [{}], if I require name of user1 and gender of user 3 how we will do that?

//See how we do it

// So, in Array's 0 index, taking username of 1st object and space at 1st and 2nd index 
//and at 3rd index taking usergender from object 4(Maryam) that's why shows result as Female
const[{username}, , ,{usergender}]=users; 
console.log(username,usergender);

//and if I need to change the name of the variable name we can also do that 
//see example below

const[{username:u1},{usergender:ug}]=users; //this time not taking any space so it will be on 01st index but value of 2nd object (Alia)
console.log(u1,ug);