const number = 7;
let count = 0;

for(let a = 1; a <= number; a++){
  if (number % a === 0){
   count++
    
  }
}

if ( count === 2 ) {
  console.log(`${number} is a Prime Number`)
}

else {
  console.log(`${number} is Not a Prime Number`)
}
