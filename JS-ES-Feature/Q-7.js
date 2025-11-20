"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25,
    num2 = 0;

function calculate(op, a, b) {
    try {
        let result;

        switch (op) {
            case "add":
                result = a + b;
                break;

            case "subtract":
                result = a - b;
                break;

            case "divide":
                if (b === 0) throw "DivideByZeroError";
                result = a / b;
                break;

            case "power":
                result = Math.pow(a, b);
                break;

            case "root":
                if (a < 0) throw "NegativeRootError";
                result = Math.sqrt(a);
                break;

            default:
                throw "InvalidOperationError";
        }

        console.log(`Operation: ${op} | Result: ${result}`);
    } catch (err) {
        console.log(`Operation: ${op} | Error: ${err}`);
    }
}

console.log("\n--- Smart Calculator Summary ---\n");

for (let op of operations) {
    calculate(op, num1, num2);
}

console.log("\n--- End of Summary ---\n");