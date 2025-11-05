//File: course.js in root/myFiles/ directory
  
// import express from "express"
const express1 = require("express");
const myRouter = express1.Router()
  
myRouter.get('/', (req, res) => {
    // res.send('Web Development')
    const myObject={
        name:"Web Development",
        duration:"6 months",
        fee:10000
    }
    res.json(myObject);
    }
)
//exporting so that it can access from other files
module.exports = myRouter;