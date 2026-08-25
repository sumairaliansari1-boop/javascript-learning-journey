const amount =  1000;

let dissTwenty = 20;
let dissTen = 10;
let dissFive = 5;

let finalPrice = 0;

if(amount >= 10000){
  let off = amount * dissTwenty / 100;
  finalPrice = amount - off
  console.log(`Original Amount: ${amount}`)
  console.log(`Disscount: ${dissTwenty}`)
  console.log(`Disscount Amount: ${off}`)
}

else if ( amount >= 5000){
  let off = amount * dissTen / 100;
  finalPrice = amount - off
  console.log(`Original Amount: ${amount}`)
  console.log(`Disscount: ${dissTen}`)
  console.log(`Disscount Amount: ${off}`)
}


else if( amount >= 2000 ){
  let off = amount * dissFive / 100;
  finalPrice = amount - off
  console.log(`Original Amount: ${amount}`)
  console.log(`Disscount: ${dissFive}`)
  console.log(`Disscount Amount: ${off}`)
}

else {
  finalPrice = amount 
  console.log(`Original Amount: ${amount}`)
  console.log("No Disscount")
}




console.log(`Final Price: ${finalPrice}`)
