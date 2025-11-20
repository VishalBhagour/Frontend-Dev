"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const invalidEntries = [];
const debugLog = [];

console.log("\n=== JSON Audit Start ===\n");

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;
    const raw = rawData[i];

    console.log(`-- Processing line ${lineNumber}: ${raw}`);

    try {
        console.log(`   [step] attempt JSON.parse at line ${lineNumber}`);
        const parsed = JSON.parse(raw);
        console.log(`   [step] parsed =>`, parsed);

        // Validate presence of keys
        if (!parsed.hasOwnProperty("user") || !parsed.hasOwnProperty("age")) {
            const missing = [];
            if (!parsed.hasOwnProperty("user")) missing.push("user");
            if (!parsed.hasOwnProperty("age")) missing.push("age");

            const reason = `Missing keys: ${missing.join(", ")}`;
            throw new Error(reason);
        }

        console.log(`   [step] keys present (user, age) at line ${lineNumber}`);

        // Convert age to Number
        const ageNum = Number(parsed.age);
        console.log(`   [step] converted age -> Number(${parsed.age}) = ${ageNum}`);

        if (Number.isNaN(ageNum)) {
            throw new Error("Invalid age: not a number");
        }

        // All validations passed — push cleaned record
        const cleanedRecord = { user: String(parsed.user), age: ageNum };
        clean.push(cleanedRecord);
        console.log(`   [step] pushed cleaned record:`, cleanedRecord);
    } catch (err) {
        const errorInfo = {
            line: lineNumber,
            raw,
            error: err && err.message ? err.message : String(err)
        };
        invalidEntries.push(errorInfo);
        console.log(`   [error] line ${lineNumber} -> ${errorInfo.error}`);
        console.log("   [control] continuing to next entry\n");
    }
}

console.log("\n=== Post-processing: filter under-18 users ===\n");

const adults = clean.filter(r => r.age >= 18);
const minors = clean.filter(r => r.age < 18);

console.log("Clean (valid) entries:", clean);
console.log("Adults (age >= 18):", adults);
console.log("Minors (age < 18):", minors);

console.log("\nInvalid entries (with line numbers and reasons):");
for (const e of invalidEntries) {
    console.log(`  Line ${e.line}: ${e.raw} → ${e.error}`);
}

console.log("\nSummary:");
console.log(`  Total raw entries: ${rawData.length}`);
console.log(`  Valid entries: ${clean.length}`);
console.log(`  Invalid entries: ${invalidEntries.length}`);
console.log(`  Adults: ${adults.length}`);
console.log(`  Minors: ${minors.length}`);

console.log("\n=== JSON Audit End ===\n");