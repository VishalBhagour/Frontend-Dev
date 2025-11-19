let currentSalary = 30000;
let increment = 10;

let projection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (increment / 100);
    projection.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(projection);