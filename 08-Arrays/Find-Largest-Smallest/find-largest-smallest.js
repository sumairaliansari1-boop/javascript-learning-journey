const numbers = [12, 45, 7, 89, 23, 56, 3];

let largest = numbers[0];
let smallest = numbers[0];


for(let a = 0; a< numbers.length; a++){
  if(numbers[a] > largest){
    largest = numbers[a]
  }

  if(numbers[a] < smallest){
    smallest = numbers[a]
  }
}

console.log(largest);
console.log(smallest);
