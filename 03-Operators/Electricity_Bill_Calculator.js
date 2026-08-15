  
  let unitConsumed = 250;
  
  
  let rate1 = 10;
  let rate2 = 15;
  let rate3 = 20;
  
  
  let total = 0;
  
  
  if (unitConsumed <= 0) {
      console.log("Invalid Units");
      
  }
  
  else if (unitConsumed <= 100){
    total += unitConsumed * rate1;
  }
  
  else if (unitConsumed <= 200){
    let remaining = unitConsumed - 100;
    total += 100 * rate1
    total += remaining * rate2;
  }
  
  else if (unitConsumed <= 300){
    let remaining = unitConsumed - 200;
    total += 100 * rate1
    total += 100 * rate2
    total += remaining * rate3
  }
  
  console.log("----------- Electricity Bill ------------")
  console.log(`Units Consumed = ${unitConsumed}`)  
  console.log(`Total Bill = Rs.${total}`)
