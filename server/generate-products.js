const fs = require('fs');

const productList = [];

for (let i = 1; i <= 100; i++) {
  const product = {
    id: i,
    name: `Produit ${i}`,
    price: Math.floor(Math.random() * 100) + 1,
    quantity: Math.floor(Math.random() * 100) + 1,
    available: Math.random() < 0.5
  };

  productList.push(product);
}

const productsObject = { products: productList };

const jsonString = JSON.stringify(productsObject, null, 2);

fs.writeFileSync('db.js', jsonString);

