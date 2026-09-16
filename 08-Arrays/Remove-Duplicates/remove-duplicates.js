const numbers = [10, 20, 10, 30, 40, 20, 50, 30];

let newArr = []

for(let a = 0; a < numbers.length; a++){
  if(!newArr.includes(numbers[a])){
    newArr.push(numbers[a])
  }
}

console.log(newArr)
