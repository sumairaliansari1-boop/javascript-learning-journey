const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    price: 8500,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Mechanical Keyboard",
    price: 6000,
    category: "Electronics"
  },
  {
    id: 103,
    name: "Gaming Mouse",
    price: 3500,
    category: "Accessories"
  }
];


const searchId = 102;


let result = products.find((finder)=>{

   
    return finder.id ===  searchId
})


if (!result) {
    console.log("Product Not Found");
    
}
else {

console.log(result);

}
