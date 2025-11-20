"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
    try {
        if (t === null) throw "NullEntry";
        if (!t.id || t.amount === undefined) throw "MissingProperty";
        if (t.amount < 0) throw "NegativeAmount";

        valid.push(t);
    } catch (err) {
        invalid.push({ transaction: t, error: err });
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log(`Successful Count: ${valid.length}`);
console.log(`Failed Count: ${invalid.length}`);