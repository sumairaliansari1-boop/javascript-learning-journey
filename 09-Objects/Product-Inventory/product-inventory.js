let product = {

    name : "Wireless_Headphones",
    price: 8500,
    category: "Electronics",
    stock: 10,
    productId: 101

}


console.log(product)

console.log(`Product Name: ${product.name}`)
console.log(`Price: ${product.price}`)
console.log(`Category: ${product.category}`)
console.log(`Stock: ${product.stock}`)
console.log(`Product ID: ${product.productId}`);


product.price = 8000
product.stock = 8

console.log(`Updated Price: ${product.price}`);
console.log(`Updated Stock: ${product.stock}`);


if(product.stock>0){
    console.log(`Product is In Stock`);
    
}

else {
    console.log("Product is Out of Stock");
    
}
