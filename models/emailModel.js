const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxlength:[30, 'name can be max 30 character'],
        minlength:[3, 'name can be min 3 character']
    },
    country:{
        type: String,
        required: [true, "country is required"],
        trim: true,
        maxlength:[30, 'country can be max 30 character'],
        minlength:[5, 'country can be min 5 character']
    },
    email:{
        type: String,
        index: false,
        // unique: [true,'Please provide unique email address'],
        lowercase: true,
        validate:{
            validator: (v)=>{
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return mailformat.test(v)
            }
        }
    },
    contact:{
        type: String,
        required: [true, 'phone number is required'],
        trim: true,
        maxlength:[13, 'name can be max 13 character'],
        minlength:[10, 'name can be min 3 character']
    },
    message:{ type: String,
        required: [true, "message is required"]
    },
    subject:{  
        type: String,
        required: [true, "subject is required"],
        trim: true,
        maxlength:[100, 'subject can be max 100 character'],
        minlength:[3, 'subject can be min 3 character']
    },
},{timestamps: true})

const Email = mongoose.model('email', emailSchema)

module.exports = Email