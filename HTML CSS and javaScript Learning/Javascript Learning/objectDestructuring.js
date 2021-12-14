//Very IMPORTANT

const cricket ={
    ball: "cookaburra",
    Team:"Pakistan",
    bat:"CA",
    player:"Baber Azam",

};

//One way of getting it
const objGetter=cricket.ball;
const obj2Getter=cricket.bat;

console.log(objGetter);
console.log(obj2Getter);

//Another Way (Destructuring Way)

// Note that the variables in the object on the left hand side should have the same name as a property key in the object person. 
//If the names are different, we'll get undefined:

let{ball,Team}=cricket;
console.log(Team); //Pakistan

//Using a new Variable Name
//If we want to assign values of an object to a new variable instead of using the name of the property, we can do this:

let person1={name:"Umar", age :"29", country :"Pakistan",hobby: "Play Cricket"}

let{name:n1,age:a1,...restvalues}=person1;
console.log(n1,a1);
console.log(restvalues);

//Using a new Variable Name
//If we want to assign values of an object to a new variable instead of using the name of the property, we can do this:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name: foo, job: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Developer" */

//We can also set default values when we assign values to a new variable:

/* let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name:foo = "myName", friend: bar = "Annie"} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Annie" */


/*Arrays can also be used with objects in object destructuring:

let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

let {name:foo, friends: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//["Annie", "Becky"] */

/*
Nesting in Object Destructuring
Objects can also be nested when destructuring:

let person = {
    name: "Sarah",
    place: {
        country: "Nigeria", 
        city: "Lagos" }, 
    friends : ["Annie", "Becky"]
};

let {name:foo,
     place: {
         country : bar,
         city : x}
    } = person;

console.log(foo);//"Sarah"
console.log(bar);//"Nigeria" */