const calculateTax = require("./taxCalculator");

function distributeSalary(numEmployees, totalSalary) {
    const baseSalary = Math.floor(totalSalary / numEmployees);
    let remainder = totalSalary % numEmployees;

    const employees = [];

    for (let i = 0; i < numEmployees; i++) {
        let salary = baseSalary;
        if (remainder > 0) {
            salary += 1;
            remainder--;
        }

        const tax = calculateTax(salary);

        employees.push({
            employeeId: i + 1,
            salary,
            tax,
            takeHome: salary - tax
        });
    }

    return employees;
}

module.exports = distributeSalary;
