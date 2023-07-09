const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxlength:[30, 'name can be max 30 character'],
        minlength:[3, 'name can be min 3 character']
    },
    subject:{  type: String,
        required: [true, "subject is required"],
        trim: true,
        maxlength:[30, 'subject can be max 30 character'],
        minlength:[3, 'subject can be min 3 character']

    },
    email:{
        type: String,
        // unique: [true,'Please provide unique email address'],
        lowercase: true,
        validate:{
            validator: (v)=>{
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return mailformat.test(v)
            }
        }
    },
    message:{ type: String,
        required: [true, "message is required"]
    }
},{timestamps: true})

const Email = mongoose.model('email', emailSchema)

module.exports = Email