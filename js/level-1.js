// Level 1


// Question 1 Declare and initialise a variable with a string value.

var name = "John Doe";

//Question 2 Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
    name: "Jane Doe",
    age: 37
}
/*
    Question 3

    Create a variable called outOfStock and assign it a boolean value.
    Create an if else statement that checks the value of outOfStock.
    If it is true, console log "Out of stock". Otherwise log "In stock".
*/

var outOfStock = true;

if (outOfStock) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 4 Create an array of five numbers. Loop through the array and console log each value.

var myNumbers = [544,657,5657,767,765];

for (var counter = 0; counter < myNumbers.length; counter++) {
    console.log(myNumbers[counter]);
}

// Question 5 Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.


for (var counter1 = 15; counter1 <= 25; counter1++) {
    console.log(myNumbers[counter1]);
}

// Question 6 Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var counter2 = 15; counter2 <= 25; counter2++) {
    if (counter2 === 20) {
        console.log(myNumbers[counter2]);
    }
}

/*
    Question 7

    Create an array of two objects. Each object must have the same three properties (with different values):
    one property with a string value
    one property with a number value
    one property with a boolean value
    Loop through the array and console log the number value and the boolean value.
*/

var users = [
    {
        name: "Tommy",
        age: 23,
        female: false
    },
    {
        name: "Tea",
        age: 22,
        female: true
    }
];

for (var counter3 = 0; counter3 < users; counter3++) {
    console.log(users[counter3].age);
    console.log(users[counter3].female);
}

/*
    Question 8

    Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
    Inside the function, log the string "I don't like " together with the argument.
    Call the function and pass in a value of your choice.

    Example:
    If you pass in the value "giraffes", the function should log: "I don't like giraffes".
*/

function whatIDontLike (item){
    console.log("I don't like " + item);
}

whatIDontLike("Reggae");

// Question 9 Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.

function subtractingNumber(a, b){
    console.log(a - b);
} 

subtractingNumber(322,112);

/*
    Question 10

    Create an empty array.
    Create a function that accepts one argument.
    Inside the function, add the argument to the array.
    Call the function and pass in a value of any type.
*/

var drinks = [];

function addDrinks(drink){
    drinks.push(drink);
}

addDrinks("martini");

