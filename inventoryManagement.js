// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

console.log(products);

// 1. Log the first product in the array
function logFirstProduct() {
  console.log(products[0]);
};

// 2. Add a new product to the end of the array 
function addProduct(ProductName) {
  products.push(ProductName);
};

// 3. Update the name of the second product in the array
function updateProductName(index, newName) {
  products[index] = newName;
};

updateProductName();
// 4. Remove the last product from the array
function removeLastProduct() {
  products.pop();
};

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};





