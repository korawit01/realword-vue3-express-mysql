const express= require('express');
const app = express();
const cors = require('cores')
const mysql = require('mysql');
const dotenv = require('dotenv')
const articleRoutes = require("./routes/article")
const userRoutes = require("./routes/user")
var bodyParser = require('body-parser')
dotenv.config();
// app.use(cors({
//     origin: "http://localhost:8080",
//     credentials: true
// }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send("welcome to express")
});


app.listen(process.env.PORT, () => {
    console.log("listening to port " + process.env.PORT)
});

app.use('/api/article/', articleRoutes)
app.use('/api/user/', userRoutes)