function calculateTax(income) {
    let tax = 0;

    if (income > 1000000) {
        tax += (income - 1000000) * 0.25;
        income = 1000000;
    }

    if (income > 500000) {
        tax += (income - 500000) * 0.20;
        income = 500000;
    }

    if (income > 250000) {
        tax += (income - 250000) * 0.10;
    }

    if (tax > 50000) {
        tax += (tax - 50000) * 0.05;
    }

    return Math.round(tax);
}

module.exports = calculateTax;
