const express = require("express");
const router = express.Router();

const { calculatePayroll } = require("../controllers/taxController");

router.post("/calculate", calculatePayroll);

module.exports = router;
