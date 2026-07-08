// //Arrays and function are objects


// let courses = ['hld', 'lld', 'dsa', 6, true, null]

// console.log(courses[3]);
// console.log(courses[4]);
// console.log(courses[5]);


// console.log(typeof (courses));;
// console.log(courses);
// find the even no in an array

//find even numbers in an array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     }
// }

// console.log(evenNumbers);

//find string in array

let arr =[23,45 ,"ashi", true, null, "javascript", 6, "python"];
let stringArr = [];

for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === "string"){
        stringArr.push(arr[i]);
    }
};
console.log(stringArr);

//sum of all numbers in an array
let numArr = [1, 2, 3, 4, 5];   
let sum = 0;

for(let i=0; i<numArr.length; i++){
    sum += numArr[i];
}
console.log(sum);


//print arry in desending order

let arr1 = [5, 2, 9, 1, 5, 6];
arr1.sort(function(a, b){return b-a});
console.log(arr1);


//reverse an array
let arr2 = [1, 2, 3, 4, 5];
arr2.reverse();
console.log(arr2);
