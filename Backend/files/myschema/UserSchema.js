
//File: UserSchema.js in ROOT-FOLDER/myschema/ folder
  
const UserMongoose =require("mongoose")
//import { Schema } from 'NoteMongoose'
//above line will generate error because you don't use import and require together. Use only one format
const { Schema } = UserMongoose; // Destructure Schema from mongoose
  
const UserSchema = new Schema({
    regEmail: {
        type: String,
        required: true
    },
    regName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
//exporting so that it can be used in another file
//1st parameter is for name-of-collection in database. DONT USE CAPITAL LETTER IN THE NAME
//3rd parameter is same as 1st parameter so that name of collection is same as in 1st parameter.
  
const UserModel = UserMongoose.model('myCollectionMyDBClass', UserSchema, 'myCollectionMyDBClass');
  
module.exports = UserModel;
