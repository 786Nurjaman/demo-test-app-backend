const mongoose = require('mongoose')



const connectDB =async(options={})=>{
    try {
        await mongoose.connect('mongodb+srv://admin:1qaz2wsx@cluster0.fgvpy.mongodb.net/project-01?retryWrites=true&w=majority',options)
        console.log('Database is connected')
        mongoose.connection.on('error',()=>{
            console.error('Database is not connected',error)
        })
    } catch (error) {
        console.error('Database connection failed',error.toString())
    }
} 

module.exports = connectDB