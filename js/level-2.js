// Level 2

/*
    Question 1

    Using the loop from question 5 above, only log the counter variable if it is an even number.
    Hint: you can use the modulus % operator for this.
*/


for (var counter4 = 15; counter4 <= 25; counter4++) {
    if (counter4 % 2 === 0) {
        console.log(myNumbers[counter4]);
    }
}

/*
    Question 2

    Create a function that logs the sentence "I am a function".
    Assign this function to a variable called innerFunction.
    Create another function called outerFunction that accepts one argument.
    Inside outerFunction, call the argument like you would a function - with parenthesis ().
    Call outerFunction and pass in the innerFunction variable.
*/

var innerFunction = function(){
    console.log("I am an function");
}

function outerFunction(functionCaller){
    functionCaller();
}

outerFunction(innerFunction);