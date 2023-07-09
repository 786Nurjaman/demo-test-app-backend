const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: [true,'Please provide unique email address'],
        lowercase: true,
        validate:{
            validator: (v)=>{
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return mailformat.test(v)
            }
        }
    }
},{timestamps: true})
const User = mongoose.model('user',userSchema)
module.exports= User