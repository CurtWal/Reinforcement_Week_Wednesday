


// 1. Create a javascript object that represents a food store product.
// The item should contain a name, description, bulk price, and consumer price. 
// console.log the result
let products = {
    name: 'Bread',
    description: 'Whole Wheat',
    bulkPrice: '15.85',
    consumerPrice: '5',
};
console.log(products);
// 2. Create a single method for printing the above object's name and description.
products.nameDescription = function(){
    console.log(
    `Name: ${products.name}
Description: ${products.description}`)
}
products.nameDescription();

// 3. Create another method on the object from step 1 that returns a product's price with a discount applied.
// Supposing the product's price is 5, calling the discount method with a discount of 15% (0.15) will return 4.25.

// 4. Use a for-in loop to print out each property of the method (requires research from you :) )
