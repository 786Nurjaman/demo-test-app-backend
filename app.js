const express = require('express')
const port = 7001
const app=express()

app.use('/test',(req, res)=>{
    res.send('Server is running successfully')
    res.end()
})
app.listen(port, ()=>{
    console.log(`server is listening at http://localhost:${port}`)
})