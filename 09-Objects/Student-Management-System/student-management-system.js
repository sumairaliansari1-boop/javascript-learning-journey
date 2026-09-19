const student = {
  name : "Sumair Ali",
  age : 23,
  regNo : 24,
  course : "BS Information Technology",
  cgpa : 3.50
}



console.log(student)



console.log(`Student Name: ${student.name}`)
console.log(`Age: ${student.age}`)
console.log(`Registration Number: ${student.regNo}`)
console.log(`Course: ${student.course}`)
console.log(`CGPA: ${student.cgpa}`)

student.cgpa = 3.66;

console.log(`Updated CGPA: ${student.cgpa}`)
