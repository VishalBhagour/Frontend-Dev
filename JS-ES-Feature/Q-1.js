"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("Original:", value, "| Number:", num, "| Boolean:", bool, "| String:", str);

    if (!isNaN(num) && value !== " " && value !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }
}

console.log("\nValid Numeric Data:", validNumbers);
console.log("Invalid Numeric Entries:", invalidNumbers);

console.log("\n--- Detailed Report ---");
for (let value of apiData) {
    let num = Number(value);

    if (!isNaN(num) && value !== " " && value !== "100px") {
        console.log(`${value} → VALID number (${num})`);
    } else {
        console.log(`${value} → INVALID number`);
    }
}