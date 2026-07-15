const employeeName = "Sumair Ali";
const employeeId = 24;
let basicSalary = 65000;
let bonus = 8000;
const tax = 2000;
const otherDeduction = 1500;

const grossSalary = basicSalary + bonus;
const deduction = tax + otherDeduction;
const netSalary = grossSalary - deduction;

console.log("======= SALARY SLIP =====");
console.log(`Employee = ${employeeName}`);
console.log(`Employee Id = ${employeeId}`);
console.log(`Basic Salary = ${basicSalary}`);
console.log(`Bonus = ${bonus}`);
console.log(`Gross Salary = ${grossSalary}`);
console.log(`Tax = ${tax}`);
console.log(`Other Deduction = ${otherDeduction}`);
console.log(`Total Deduction = ${deduction}`);
console.log(`Net Salary = ${netSalary}`);
