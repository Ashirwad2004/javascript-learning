# JavaScript Fresher Interview Prep — 30 Questions with Answers

---

## Section 1: JavaScript Basics (Theory)

### 1. What is JavaScript, and how is it different from Java?
JavaScript is a lightweight, interpreted (or JIT-compiled) scripting language primarily used to make web pages interactive. Despite the similar name, Java and JavaScript are unrelated — Java is a statically-typed, compiled, object-oriented language used for standalone applications, while JavaScript is dynamically typed and runs mainly in browsers (and on servers via Node.js).

### 2. What are the data types in JavaScript?
**Primitive types:** `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`
**Non-primitive (reference) types:** `Object`, `Array`, `Function`

```js
let str = "hello";       // String
let num = 42;             // Number
let bool = true;          // Boolean
let empty = null;         // Null
let notDefined;           // Undefined
let obj = { a: 1 };       // Object
let arr = [1, 2, 3];      // Array (a type of object)
```

### 3. Difference between `var`, `let`, and `const`
| Feature | var | let | const |
|---|---|---|---|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Hoisting | Hoisted, initialized as `undefined` | Hoisted, not initialized (TDZ) | Hoisted, not initialized (TDZ) |

```js
var x = 1;
if (true) {
  var x = 2; // same variable, overwritten
}
console.log(x); // 2

let y = 1;
if (true) {
  let y = 2; // different variable (block scoped)
}
console.log(y); // 1
```

### 4. What is the difference between `==` and `===`?
`==` compares values after converting them to the same type (loose equality). `===` compares both value and type (strict equality) without conversion.

```js
console.log(5 == '5');   // true (type coerced)
console.log(5 === '5');  // false (different types)
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### 5. What are template literals?
Strings wrapped in backticks (`` ` ``) that allow embedded expressions using `${}` and multi-line text without concatenation.

```js
const name = "Ashirwad";
const greeting = `Hello, ${name}! You have ${2 + 3} new messages.`;
console.log(greeting); // Hello, Ashirwad! You have 5 new messages.
```

### 6. What is `NaN`? How do you check if a value is `NaN`?
`NaN` stands for "Not a Number" — it's the result of an invalid or undefined mathematical operation. Oddly, `NaN` is the only value in JS that is not equal to itself.

```js
console.log(0 / "abc"); // NaN
console.log(NaN === NaN); // false

console.log(isNaN("abc"));        // true (converts first, less reliable)
console.log(Number.isNaN(NaN));   // true (strict check, preferred)
console.log(Number.isNaN("abc")); // false (no conversion happens)
```

### 7. What is type coercion?
JavaScript automatically converts one data type to another when operators are used on mismatched types.

```js
console.log('5' + 5);   // '55'  (number converted to string)
console.log('5' - 5);   // 0     (string converted to number)
console.log('5' * '2'); // 10    (both converted to number)
console.log(1 + true);  // 2     (true becomes 1)
```

### 8. What is the difference between `null` and `undefined`?
- `undefined` means a variable has been declared but not assigned a value.
- `null` is an intentional assignment representing "no value" — the developer explicitly set it.

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (a well-known JS quirk/bug)
```

### 9. What are truthy and falsy values?
A value is "falsy" if it evaluates to `false` in a boolean context. Everything else is "truthy".

**Falsy values:** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`

```js
if (0) console.log("won't run");
if ("") console.log("won't run");
if ("hello") console.log("will run"); // truthy
if ([]) console.log("will run");      // empty array is truthy!
if ({}) console.log("will run");      // empty object is truthy!
```

### 10. What is a function? Difference between function declaration and function expression.
A function is a reusable block of code designed to perform a task.

```js
// Function Declaration — hoisted, can be called before it's defined
function greet() {
  console.log("Hi!");
}

// Function Expression — NOT hoisted, stored in a variable
const greetExpr = function() {
  console.log("Hi!");
};

// Arrow Function Expression
const greetArrow = () => {
  console.log("Hi!");
};
```
Key difference: function declarations are hoisted with their full definition, so they can be called before they appear in the code. Function expressions are only hoisted as a variable (undefined) — calling them early throws an error.

---

## Section 2: Arrays & Objects

### 11. How do you loop through an array?

```js
const arr = [10, 20, 30];

// Classic for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of (best for values)
for (const value of arr) {
  console.log(value);
}

// forEach
arr.forEach((value, index) => {
  console.log(index, value);
});
```

### 12. How do you loop through an object?

```js
const person = { name: "Ashirwad", role: "Developer" };

// for...in
for (const key in person) {
  console.log(key, person[key]);
}

// Object.keys()
Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});

// Object.entries()
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

### 13. Difference between `push()`, `pop()`, `shift()`, `unshift()`

```js
let arr = [1, 2, 3];

arr.push(4);     // [1, 2, 3, 4]   — adds to end
arr.pop();        // [1, 2, 3]      — removes from end
arr.unshift(0);   // [0, 1, 2, 3]  — adds to start
arr.shift();      // [1, 2, 3]      — removes from start
```

### 14. What does `map()`, `filter()`, and `reduce()` do?

```js
const nums = [1, 2, 3, 4, 5];

// map: transforms each element, returns new array of same length
const doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: keeps elements matching a condition
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// reduce: reduces array to a single value
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 15
```

### 15. How do you check if a value exists in an array?

```js
const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.indexOf("banana"));  // 1
console.log(fruits.indexOf("grape"));   // -1 (not found)
```

### 16. What is destructuring?
Pulling values out of arrays or objects directly into variables.

```js
// Array destructuring
const [first, second] = [10, 20];
console.log(first, second); // 10 20

// Object destructuring
const { name, role } = { name: "Ashirwad", role: "Developer" };
console.log(name, role); // Ashirwad Developer

// With default values
const { age = 25 } = {};
console.log(age); // 25
```

### 17. What is the spread operator (`...`)?
Expands an array or object into individual elements.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Also used to copy arrays/objects (shallow copy)
const copyArr = [...arr1];
```

---

## Section 3: Functions & Scope

### 18. What is a callback function?
A function passed as an argument to another function, to be executed later.

```js
function processUser(name, callback) {
  console.log("Processing:", name);
  callback();
}

processUser("Ashirwad", () => {
  console.log("Done!");
});
```

### 19. What is an arrow function? How is it different from a regular function?

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (shorter syntax)
const addArrow = (a, b) => a + b;
```
Key differences:
- Arrow functions don't have their own `this` — they inherit `this` from the surrounding scope.
- Arrow functions cannot be used as constructors (no `new`).
- Arrow functions don't have their own `arguments` object.

### 20. What is scope?
Scope determines where a variable is accessible.
- **Global scope:** accessible everywhere.
- **Function/local scope:** only accessible inside the function it's declared in.
- **Block scope:** `let`/`const` declared inside `{}` are only accessible within that block.

```js
let globalVar = "I'm global";

function myFunc() {
  let localVar = "I'm local";
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}

console.log(localVar); // Error: not defined outside function
```

### 21. What is hoisting?
JavaScript moves variable and function declarations to the top of their scope before code executes. `var` and function declarations are hoisted fully; `let`/`const` are hoisted but stay in a "temporal dead zone" until initialized.

```js
console.log(a); // undefined (not an error, due to hoisting)
var a = 5;

sayHi(); // "Hi!" — works because function declarations are fully hoisted
function sayHi() {
  console.log("Hi!");
}
```

---

## Section 4: DOM Basics

### 22. How do you select an element in the DOM?

```js
document.getElementById("myId");
document.getElementsByClassName("myClass");
document.querySelector(".myClass");   // returns first match
document.querySelectorAll(".myClass"); // returns all matches (NodeList)
```

### 23. How do you add an event listener to a button?

```js
const btn = document.querySelector("#myButton");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

### 24. What's the difference between `innerHTML` and `textContent`?

```js
const div = document.querySelector("#myDiv");

div.innerHTML = "<b>Bold text</b>"; // renders as HTML (bold text shown)
div.textContent = "<b>Bold text</b>"; // renders as plain text (tags shown literally)
```
`innerHTML` parses and renders HTML tags; `textContent` treats everything as plain text (and is safer against injection/XSS).

### 25. What is event bubbling?
When an event occurs on an element, it "bubbles up" and also triggers on its parent elements.

```js
document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked"); // also fires when child is clicked
});
```

---

## Section 5: Simple Coding Questions

### 26. Swap two variables without using a third variable

```js
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5
```

### 27. Check if a number is even or odd

```js
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

### 28. Find the largest number in an array

```js
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([3, 7, 2, 9, 4])); // 9

// Without built-in Math.max (manual approach — good to know both)
function findLargestManual(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

### 29. Reverse a string

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

// Without built-in reverse (manual approach)
function reverseManual(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
```

### 30. FizzBuzz
Print numbers 1 to 100. Multiples of 3 → "Fizz", multiples of 5 → "Buzz", multiples of both → "FizzBuzz".

```js
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

## Quick Revision Checklist

Before your interview, make sure you can confidently:
- [ ] Explain `var` vs `let` vs `const` with an example
- [ ] Explain `==` vs `===`
- [ ] Write `map`, `filter`, `reduce` from memory
- [ ] Explain truthy/falsy values
- [ ] Write FizzBuzz without looking anything up
- [ ] Explain the difference between function declaration and expression
- [ ] Explain what a callback is
- [ ] Reverse a string / find the largest number in an array without hesitation
- [ ] Explain event bubbling with a simple example

**Tip:** Interviewers assessing freshers care more about *how clearly you explain your reasoning* and *whether your code runs correctly* than about knowing obscure edge cases. Practice saying your answers out loud, not just writing them.
