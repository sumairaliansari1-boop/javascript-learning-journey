// primitive Data type Example
// primitive values are copied by value

let i = 10
let j = i

i = 20 

console.log("Prmitive Data type")
console.log("i =", i);
console.log("j =", j);




// Reference Data type Example
// Both variables point to the same array in memory

let fruits = [10, 20, 30, 40, 50];

let copied = fruits 

console.log("Before pop():");
console.log("fruits = ",fruits);
console.log("copied = ",copied);

copied.pop();

console.log("After pop():");
console.log("fruits =", fruits);
console.log("copied =", copied);
