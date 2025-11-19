let userName = "Manjeet";
let age = 22;
let isStudent = true;
let hobbies = ["cricket", "coding", "music"];
let details = { city: "Delhi", course: "B.Tech" };
let emptyValue = null;
let notAssigned;

let report = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "details", value: details, type: typeof details },
    { label: "emptyValue", value: emptyValue, type: typeof emptyValue },
    { label: "notAssigned", value: notAssigned, type: typeof notAssigned }
];

console.table(report);