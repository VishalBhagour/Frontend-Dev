const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedPrices = [];

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price -= price * 0.10;
    } else if (product.category === "fashion") {
        price -= price * 0.05;
    }
    discountedPrices.push(price);
}

let total = discountedPrices.reduce((a, b) => a + b, 0);

if (total > 50000) {
    total -= total * 0.05;
}

console.log("Final Total:", Math.round(total));