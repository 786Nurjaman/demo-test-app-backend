const express = require('express')
const morgan = require('morgan')
// const cluster = require('cluster')
// const os = require('os')
const createError = require('http-errors')
require('dotenv').config()
const xssClean = require('xss-clean')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const port = process.env.PORT || 6001
const router = require('./router/indexRouter')
const connectDB = require("./config/db")
const { errorResponse } = require('./util/responseController')
const app=express()

// const numCpu = os.cpus().length

const rateLimiter = rateLimit({
    windowMs: 1*  60 * 1000, //1 minute
    max: 10,
    message: 'Too many request from the ip. Please try again later'
})
app.use(cors())
app.use(rateLimiter)
app.use(xssClean())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/test',(req, res)=>{
    return res.status(200).json({
        success: true,
        message:"server is runing successfully"
    })
})
app.use('/api/v1',router)

//client error handling
app.use((req, res, next)=>{
    next(createError(404,'route not found!'))
})

//server error handling ->all the errors
app.use((err, req, res, next)=>{
   return errorResponse(res, {statusCode: err.status, message: err.message})
})


// if(cluster.isMaster){
//     for(let i=0; i<numCpu; i++){
//         cluster.fork()
//     }
//     cluster.on('exit',(worker, code, signal)=>{
//         console.log(`worker ${worker.process.pid} died`)
//         cluster.fork()
//     })
// }else{
    
// }
app.listen(port,async()=>{
    await connectDB()
    console.log(`Server is listening at http://localhost:${port}`)
})