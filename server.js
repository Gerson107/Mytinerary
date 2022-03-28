require("dotenv").config();
const cors = require("cors");
const express = require("express");
const passport = require('passport')
require("./config/database");


const ROUTER = require("./routes/routes");
const app = express();
const PORT = process.env.PORT || 400
const HOST = process.env.HOST || '0.0.0.0'
const path = require('path');
const { ppid } = require("process");

//midelwares
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use("/api/v1", ROUTER);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}
app.listen(PORT, HOST, () => console.log("Server Ready on PORT" + PORT));
