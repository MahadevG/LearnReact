console.log("Hello");

//Variables

var b= 'Killer';
// console.log(b);

document.getElementById('text').innerHTML = 'It working';

// var age =prompt('what is your age?');
// document.getElementById('text').innerHTML =age;

//numbers in js
var num1 =30;
// console.log(5*3);

//functions
function fun() {
    console.log("This is from the function");
}

fun();

/**Create a function which takes in a name and says hello followed by 
 * your name
 */
function greating() {
    var name = prompt("What is your name");
    var add = 'hello '+name;
    console.log(add);
}

// greating();

//Arguments with the function

function sum(num1,num2) {
    var result = num1+num2;
    console.log(result);
}

sum(4,6);