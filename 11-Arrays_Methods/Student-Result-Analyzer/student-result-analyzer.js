const marks = [78, 85, 92, 67, 74, 88];


let result = marks.reduce((acc,curr)=>{
    return acc + curr
},0)

let avgmarks = result / marks.length;


let highmarks = marks.reduce((acc,curr)=>{
      if (acc < curr) {
       return curr
      }
      else {
        return acc
      }
},0)


let lowmarks = marks.reduce((acc,curr)=>{
      if (acc > curr) {
       return curr
      }
      else {
        return acc
      }
},marks[0])


console.log(`Total Makrs :${result}`);
console.log(`Average Marks :${avgmarks.toFixed(2)}`);
console.log(`Highest Marks :${highmarks} `);
console.log(`Lowest Marks :${lowmarks} `);




