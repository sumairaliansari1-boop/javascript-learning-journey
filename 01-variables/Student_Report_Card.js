const studentName = "Oshaque Ali";
const rollNumber = 2;
const course = "BS-IT";
const englishMarks = 80;
const dataBase = 76;
const computerMarks = 92;
const TotalMarks = englishMarks + dataBase + computerMarks;
const Perc = TotalMarks / 300 * 100; 

console.log( " ------- Student Report --------- " );
console.log(`Student Name = ${studentName}`);
console.log(`Roll Number = ${rollNumber}`);
console.log(`Course = ${course}`);

console.log(`English = ${englishMarks}`);
console.log(`Data Base = ${dataBase}`);
console.log(`Computer = ${computerMarks}`);

console.log(`Total = ${TotalMarks}`);
console.log(`Percentage = ${Perc}`);
