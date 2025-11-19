let product = " wireless headphones PRO ";

let cleaned = product.trim().toLowerCase();

cleaned = cleaned
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

cleaned = cleaned.replace("Pro", "Pro Edition");

console.log(cleaned);
console.log("Length:", cleaned.length);