const myMongoose= require('mongoose')
const myDB ="mongodb://localhost:27017/myDBClass"
const connectToDB= async()=>{
   await myMongoose.connect(myDB)
    console.log("Connected to DB")
}
module.exports= connectToDB