function employeeSalary(basicSalary,allowance,deduction){
    return (basicSalary + allowance ) - deduction
}




let result = employeeSalary(50000,5000,2000)

console.log("Basic Salary = 50000");
console.log("Allowance = 5000");
console.log("Deduction = 2000");


console.log(`Final Salary: ${result}`);

