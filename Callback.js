
// Callbacks are functions that are passed into other functions

function delayedBirthday(){
    console.log('Happy Late Birthday!');
}

setTimeout(delayedBirthday, 1000); //setTimeout function takes in another function as perameter

//

array = [2,4,6,8];

array.forEach(function(num,i,arr){ // loops through array and runs function on each value of array
    return arr[i]++;
})

//

function getUserInfo (firstName, lastName, callback) {
    var name = firstName + '' + lastName;
    return callback(name);
}

function greetUser(name) {
    return 'hello,' + name + '!';
}

getUserInfo('Chuck','Norris', greetUser)

//

function prepNumber(data,callback) {  //converts string to interger
    if (typeof data === "string") {
        data = Number(data);
    }
    return (data);
};

prepNumber("123.14". Math.floor);

// Using Callbacks Later

function getStuffFromTheInternet(callback) {
    var response = **code to get stuff from another site**
    callback(response);
}

getStuffFromTheInternet(function(stuffFromInternet){
    results = stuffFromInternet;
})

// Higher Order Functions

function repeatMe (numTimes, callback) {
    for (var i=0; i<numTimes; i++) {
        callback();
    }
}

function sayHello() {
    console.log('hello!');
}

repeatMe(3, sayHello); //say 'hello' 3 times

//

var arry = [1,2,3];

var OneUp = array.map(function(num){ //map passes each array value into function
    return num + 1;
})

oneUp


/*
Create a function called outerFn, that takes in a callback as a parameter, and
then returns that callback invoked.
*/

function outerFn(callback){
    return callback();
};

var innerFn = () => {
    return "The innerFn is a callback!";
  }
  
outerFn(innerFn);// Invoke function here
  

/*
Create a function called fullName, that takes in three parameters: firstName, lastName, and a callback.

The fullName function should return the callback, passing in firstName and lastName as parameters.

To test, invoke fullName with your first name, last name and the welcomeMessage function as arguments.
*/

var fullName = (firstname, lastName, callback) => {
    return callback(firstname, lastName);
}

var welcomeMessage = (first, last) => {
    return `Welcome to DevMountain, ${first} ${last}!`
  }
  
fullName("Sammantha", "Jeet", welcomeMessage) // Invoke fullName below
  
/*
Create a function called canDrink that will take in three parameters. The first parameter will be a number
representing an age. The second and third parameters will be callbacks. The functions drinkSoda and drinkWater
are the two callbacks that will be passed into your function.
-If the age is 21 or greater, return drinkSoda
-If the age is below 21, return drinkWater
*/

function canDrink(age, cb1, cb2) {
    if (age => 21) {
        return cb1();
    } else {
        return cb2();
    }
} 

var drinkSoda = () => {
    return "Mmm soda. Waiting 21 years was worth it"
  }
  
  var drinkWater = () => {
    return "Have a tasty glass of water!"
  }
 
  
  /*
Write two functions, one called add and one called multiply, that each takes in two numbers and returns
the appropriate new value.

Write a function called math that takes in two numbers, and a function 'operator' as parameters.
This function should return a callback invoked with the appropriate arguments.
*/

var add = (x,y) => x + y;
var multiply = (x,y) => x * y;

function math(num1, num2, operator) {
    operator.toString();
    if (operator === "+") {
        return add(num1,num2);
    } else if (operator === "*") {
        return multiply(num1,num2);
    }
}