const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginModel = function(){
    var loginSchema =  Schema({
        email:{
            type:String,
            require:true,
            trim:true,
            unique:true,
            minlength:6
        },
        password:{
            type:String,
            require:true,
            minlength:6,
            trim:true
        }
    },{versionKey:false,collection:"LoginDetails"})
    return mongoose.model("LoginDetails",loginSchema);
}
module.exports = new loginModel();

/**
 * var loginSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})
var login = mongoose.model("loginSchema",loginSchema)
module.exports = {login} 
 */
/*
var loginSchema = mongoose.model("loginCollection",{
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})
module.exports = {loginSchema}
*/