require("dotenv").config();
const cors = require("cors");
const express = require("express");
const passport = require('passport')
const connect = require('connect');
require("./config/database");


const ROUTER = require("./routes/routes");
const app = express();
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0'
const path = require('path');
const { ppid } = require("process");

//midelwares
// app.use(function(req, res, next) {
//     res.setHeader('Content-Security-policy-Report-Only',
//     "Default-src 'self'; font-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'")})
app.use(connect());
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use("/api/v1", ROUTER);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+"/frontend/build/index.html"))
    })
}
app.listen(PORT, HOST, () => console.log("Server Ready on PORT" + HOST, PORT));
