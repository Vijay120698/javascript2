// // Declare and initialize array
// let numArr = [20, 30, 40, 50];

// // Removing elements from the 
// // beginning of an array
// numArr.splice(1,0,34,40,50)

// console.log(numArr);

// Original Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Case 1: Extract the first 3 elements of the array
const case1 = arr.slice(0, 3);
console.log("First 3 Array Elements: ", case1);

// Case 2: Extract the last 3 array elements
const case2 = arr.slice(-3);
console.log("Last 3 Array Elements: ", case2);

// Case 3: Extract elements from middle of array
const case3 = arr.slice(3, 7);
console.log("Case 3: Extract elements from middle: ", case3);

// Case 4: Start index is greater than end index
const case4 = arr.slice(5, 2);
console.log("Case 4: Start index is greater than end index: ", case4);

// Case 5: Negative start index
const case5 = arr.slice(-4, 9);
console.log("Case 5: Negative start index: ", case5);

// Case 6: Negative end index
const case6 = arr.slice(3, -2);
console.log("Case 6: Negative end index: ", case6);

// Case 7: Only start index is provided
const case7 = arr.slice(5);
console.log("Case 7: Only start index is provided: ", case7);

// Case 8: Start index and end index are out of range
const case8 = arr.slice(15, 20);
console.log("Case 8: Start and end index out of range: ", case8);

// Case 9: Start and end index are negative
// and out of range
const case9 = arr.slice(-15, -10);
console.log("Case 9: Start and end index are negative"
    + " and out of range: ", case9);
// 

function isGreaterThan5(element, index, array) {
    return element > 5;
}


// Driver code
// Original array
let array = [2, 5, 8, 1, 4];

// Checking for condition in array
let value = array.some(isGreaterThan5);

console.log(value);
