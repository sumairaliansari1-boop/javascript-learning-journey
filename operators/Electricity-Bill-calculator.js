const unitsConsumed = 350;
const pricePerUnit = 40;

const bill = unitsConsumed * pricePerUnit;

const govtTax = 5;
const taxAmount = bill * govtTax / 100;

const finalBill = bill + taxAmount

console.log(`Units Usage = ${unitsConsumed}`)
console.log(`Unit Price = ${pricePerUnit}`)
console.log(`Bill = ${bill}`)
console.log(`Government Tax = ${govtTax} %`)
console.log(`Tax Amount = ${taxAmount}`)
console.log(`Final Bill = ${finalBill}`)
