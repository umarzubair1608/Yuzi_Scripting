//Let's play a game where user has to guess a no. and see if he answer the correct #

let no ="17";

//prompt is used to get user input
//Prompt takes input in string value but to convert string in to a number the trick is to add + before prompt to change it to a #
let userGuess =+prompt("Please Guess your No.");
console.log("your guessed # is : "+ userGuess);

if(userGuess>no)
{
    console.log("Sorry, Your Guessed # is higher than the orignal #");

}
else{
if(userGuess==no)
{
    console.log("Congratulations!! You Guessed the Correct #");
}
else
{
    console.log("Sorry, Your Guessed # is Lower than the orignal #");
}

}