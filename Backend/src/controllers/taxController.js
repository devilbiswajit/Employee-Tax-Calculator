const distributeSalary = require("../utils/salaryDistributor");

exports.calculatePayroll = (req, res) => {
  const { numEmployees, totalSalary } = req.body;

  if (!numEmployees || !totalSalary || numEmployees <= 0 || totalSalary <= 0) {
    return res.status(400).json({
      error: "Number of employees and total salary must be positive numbers",
    });
  }

  const employees = distributeSalary(numEmployees, totalSalary);

  const totalTax = employees.reduce((sum, emp) => sum + emp.tax, 0);

  res.json({
    employees,
    totalTax,
  });
};
