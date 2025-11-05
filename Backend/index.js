// const connectingDB =require('./db');
// connectingDB();




// //File: index.js in root directory
// const express1=require("express");
// // import express from "express"
// const app = express1()
// const port = 5000
  
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.use('/web', require('./files/web'));
// // app.get('/web', (req, res) => {
// //     res.send('Hello World!')
// // })
// app.listen(port)


const myConnectionToDB = require("./db");
const all_user = require("./files/all-user.js");
const register_user = require("./files/register-user.js");
const express = require("express");
const cors = require("cors");
const loginRoute = require('./routes/loginRoute');

// Use the login route


myConnectionToDB()
  
const app = express()
  
app.use(cors())
//allowing communication on base of json
app.use(express.json())
  
//route for all-user
app.use('/user', all_user)//displaying all user
app.use('/user/register-user', register_user)
app.use('/user/login-user', loginRoute);
const port = 5000
  
app.listen(port)