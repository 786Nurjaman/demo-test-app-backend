const Email = require('../models/emailModel')
const User = require('../models/userModel')
const createError = require('http-errors')
const { sendEmailWithNodemailer }=require('../util/nodeMailer')
const {successResponse}=require('../util/responseController')

const sendEmail=async(req, res, next)=>{
    try {
        const {name, email, contact, country, message} = req.body
        const emailSubject = `${name}-Requested for resolve query`
        const emailData = {
            email: email,
            subject: `${emailSubject}`,
            html: `
                <p>My Name is ${name}.</p>
                <p>Contact:-${contact}</p>
                <p>Country:-${country}</p>
                <p>${message}</p>
            `
        }
        try {
         const emailRes =  await sendEmailWithNodemailer(emailData)
         if(emailRes){
            const newEmail = new Email({ name, email, contact, country, message, subject: emailSubject})
            await newEmail.save()
         }
        } catch (emailError) {
            console.log(emailError)
            next(createError(500,'Failed to send verification email'))
            return
        }
        return successResponse(res,{
            statusCode : 200, 
            message:`Email sent`,
            payload: {}
        })

    } catch (error) {
        next(error)
    }
}

const subscribeEmail=async(req, res, next)=>{
    try {
        const {email} = req.body
        const newUser = new User({email})
        await newUser.save()
        return successResponse(res,{
            statusCode : 200, 
            message:`Thank you for subscribe`,
            payload: {newUser}
        })
    } catch (error) {
        next(error)
    }
}

module.exports={
    sendEmail,
    subscribeEmail
}