require("dotenv").config();
const cors = require("cors");
const express = require("express");
require("./config/database");


const ROUTER = require("./routes/routes");
const PORT = 4000;
const app = express();

//midelwares
app.use(cors());
app.use(express.json());
app.use("/api/v1", ROUTER);
app.listen(PORT, () => console.log("Server Ready"));
