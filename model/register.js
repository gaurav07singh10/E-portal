const mongoose = require('mongoose');

const register_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    bar_association_no:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
    face_id:{
        type:String,
        // required:true
    }
});

const Register = mongoose.model('Register',register_schema);
module.exports = Register;