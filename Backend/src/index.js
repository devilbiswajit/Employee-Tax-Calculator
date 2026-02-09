require("dotenv").config();

const express = require("express");
const cors = require("cors");

const taxRoutes = require("./routes/taxRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", taxRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
