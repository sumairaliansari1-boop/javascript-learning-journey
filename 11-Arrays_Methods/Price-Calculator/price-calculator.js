const prices = [1200, 500, 2500, 800, 1500];


let result = prices.reduce((acc,curr)=>{
    return acc +  curr
},0)


console.log(result);
