//For In Loop gives/return index of the loop

const fruits=["Apple","Banana","Kiwi","Orange"];

for(let fruit in fruits)
{
    console.log(fruit);
}

//What if we want data inside the array instead of index??

const fruits1=["Apple","Banana","Kiwi","Orange"];

for(let fruity in fruits1)
{
    console.log(fruits1[fruity]);
}

//How to add in New Array

const fruits3=[];
const fruits4=["Apple","Banana","Kiwi","Orange"];

for(let fruitfull in fruits4)
{
fruits3.push(fruits4[fruitfull]);
console.log(fruits3);
}
