// ========= Even Number Function ============

const numm = 8; 

function evenNumberChecker(x){
  if( x % 2 === 0 ){
    console.log(x, "Is Even Number")
  }

  else {
    console.log(x, "is Not an Even Number")
  }
}

evenNumberChecker(numm)

// ========= Odd Number Function ============ 

const num2 = 7;

function checkOddNumber(i){
  if ( i % 2 === 1 ){
    console.log(i, "Is Odd Number")
  } 

  else {
    console.log(i, "Is Not an Odd Number")
  }
}

checkOddNumber(num2);




// ========== Prime Number function ===========

const num3 = 10;


function primeNumberChecker(j){
  let count = 0;
  for(let k = 1; k<=j; k++){
    if(j % k === 0){
      count++
    }
}
    if(count === 2){
      console.log(j, "Is Prime Number");
    }

    else {
      console.log(j, "Is Not a Prime Number")
    }
  }


primeNumberChecker(num3)



// ======== Factorial Number Function =======


const num4 = 10;

function factorialNumberChecker(fact){
  let store = 1;
  for(let a = 1; a<=fact; a++){
    store*= a
  }
  console.log(`Factorial Of ${fact} is ${store}`)
}

factorialNumberChecker(num4);
