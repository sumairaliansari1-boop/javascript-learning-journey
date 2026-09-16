const cart = [1200, 500, 2500, 800];

let total = 0;


for (let a = 0; a < cart.length; a++){
  total += cart[a];
}

console.log(`Total Cart Price: ${total}`)
