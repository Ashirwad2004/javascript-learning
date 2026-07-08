createCourse("dsa");
console.log(x);


function createCourse(coursename) {
    console.log("creating" + coursename);
}
var x = 10;
console.log(x);
createCourse("lld");


//Create a function that prints your name.

function name(){
    console.log("satyamjha");
}
name();

//Create a function that adds two numbers.
function add(){
    console.log(5+7);
}
add();

//Create a function that calculates the square of a number.
function square(num){
    console.log(num*num);
}
square(5);

//Create an arrow function that multiplies two numbers.
const multiply = (a, b) => {
    console.log(a * b);
};
multiply(5, 7);

//Create a function that checks if a number is even or odd.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}
checkEvenOdd(4);
checkEvenOdd(7);

//Create a function that finds the largest of three numbers.
function findLargest(a, b, c) {
    let largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    console.log("The largest number is: " + largest);
}
findLargest(5, 10, 3);
findLargest(15, 7, 20);

//Write a function named calculateGrade that takes a student's marks and returns a grade:

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(85));
console.log(calculateGrade(75));
console.log(calculateGrade(55));
