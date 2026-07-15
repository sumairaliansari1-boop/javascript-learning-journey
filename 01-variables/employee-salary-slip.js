const employeename = "Sumair Ali";
const employeeId = 24;
let basic_Sallary = 65000;
let bonus = 8000;
const tax = 2000;
const other_Deduction = 1500;

let gross_Sallary = basic_Sallary + bonus;
let deduction = tax + other_Deduction;
let net_Sallary = gross_Sallary - other_Deduction;

console.log("===== SALARY SLIP =====");
console.log(`Employee = ${employeename}`);
console.log(`Employee_Id = ${employeeId}`);
console.log(`Gross_Sallary = ${gross_Sallary}`);
console.log(`Deduction = ${deduction}`);
console.log(`Net_Sallary = ${net_Sallary}`);
