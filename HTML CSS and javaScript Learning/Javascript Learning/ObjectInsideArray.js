//IMPORTANT
//Object inside Array
//Very useful in Real World Apps
const users=[

    {userId:1,username:"Umar",userAge:29,usergender:"Male"},
    {userId:2,username:"Alia",userAge:21,usergender:"Female"},
    {userId:3,username:"Qasim",userAge:23,usergender:"Male"},
    {userId:4,username:"Maryam",userAge:25,usergender:"Female"},
]

console.log(users);

//We can use loop and extract results as well.. I am using For Of Loop

for(let user of users)
{
console.log(user);
}

//you can access seperate properties of object as well
console.log("you can access seperate properties of object as well");
for(let u1 of users)
{
console.log(u1.username);
}

//Nested Destructuring


