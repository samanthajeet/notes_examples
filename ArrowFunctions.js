function(x,y) {
    return x + y;
};

(x,y) => x + y;


//

function() {
    7;
};

() => {
    7;
};

//

function(){
    return x + y;
};

(x,y) => {
    return x + y;
}

//

var myFunction = val => 7  // naming arrow function

//

array.filter((item) => item === "John")  // builds new array full with items that pass this filter

/*
Create a one line ES6 arrow function called isGreaterThanTwenty that will take in a
parameter and return true if the parameter is greater than 20. The function should
return false otherwise.
*/

var isGreaterThanTwenty = val => (val>20) ? true : false

//OR

var isGreaterThanTwenty = (num) => num > 20


/*
Create a one line ES6 arrow function called seven that will return the number 7. 
*/

var seven = () => 7

//Re-write the ES5 functions provided as ES6 arrow functions.
// Function 1

// function add(num1, num2){
//   return num1 + num2;
// }

// Your Solution to Function 1 Here

var add = (num1,num2) => num1 + num2;

// Function 2

// function subtract(num1, num2){
//   return num1 - num2;
// }

// Your Solution to Function 2 Here
var subtract = (num1,num2) => num1 - num2;

// Function 3

// function double(num){
//   return num * 2
// }

// Your solution to Function 3 Here

var double = num => num * 2;

/*
Create an ES6 arrow function called multiply that will take in two parameters and return the product of the two parameters. 
*/

var multiply = (x,y) => x * y;
 
/*
Create an ES6 multi-line arrow function called isGreaterThanTwenty that will take in a number parameters and
return true if the parameter is greater than twenty. The function should return false otherwise. . 
*/

var isGreaterThanTwenty = (num) => {
    return num > 20
  }


  /*
Use the built in filter method to filter over the jobs array of objects and return the object of the
person with a job as a programmer. Make sure to use the arrow function in conjunction with the filter method.
*/

var jobs = [{ role: 'receptionist', name: 'James' }, 
{ role: 'programmer', name: 'Steve' }, 
{ role: 'designer', name: 'Alicia' }]


var solution = jobs.filter((job) => job.role === "programmer")

/*
Write a multi-line arrow function called gemInfo that takes in three parameters, a gem type,
gem size, and  a gem weight. Have the gemInfo function return an object with the values of
those parameters set to these three keys, gemType, gemSize, gemWeight.
*/

var gemInfo = (type,size,weight) => ({
    gemType:type,
    gemSize:size,
    gemWeight:weight
})

//OR

var gemInfo = (gemType, gemSize, gemWeight) => {
    return {
      gemType: gemType,
      gemSize: gemSize,
      gemWeight: gemWeight
    }
  }


/*
Inside the evens function use the built in filter method to filter over the array called numbers
and return a new array with only the even numbers. Make sure to use the arrow function combined
with the filter method.
*/

var numbers = "TBD";

var evens = () => {
    return numbers.filter(n => n%2 === 0)
  }

  // OR

var evens = () => {
    return numbers.filter((v) => v % 2 === 0)
  }


/*
Inside the startWithLetterA function use the built in filter method to filter over the array called
strings and return a new array with only the strings that start with a letter "a". Make sure to use
the arrow function combined with the filter method.  
*/

var strings = "TBD";

var startWithLetterA = () => {
    return strings.filter((s) => s.charAt(0) == "a")
  }


/*
Inside the formalGreeting function use the built in .map method to map over the array called names and
return a new array with "Hello, " appended to the beginning of each name. Make sure to use the arrow
function combined with the map method.   
*/  

var names = "TBD";

var formalGreeting = () => {
  return names.map((n) => "Hello, " + n)
}


/*
Inside the productOfArray function use the built in reduce method to loop over the array called numbers
and return the product of all the numbers in the array. Make sure to use the arrow function combined with
the reduce method.  
*/

var numbers = "TBD";

var productOfArray = () => {
  return numbers.reduce((x,y) => x * y) //When the loop starts the x value is the number on the far left and the y amount is the one next to it.
}