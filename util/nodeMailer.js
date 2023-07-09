const nodemailer = require('nodemailer')


const transpoter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'nurjamanshekh.wikiance@gmail.com',
        pass: 'bzyylbiukyabimnb'
    }
})

const sendEmailWithNodemailer = async (emailData)=>{
   try {
    const mailOptions = {
        from: 'nurjamanshekh.wikiance@gmail.com',
        to: emailData.email,
        subject: emailData.subject,
        html: emailData.html
    }
   const info = await transpoter.sendMail( mailOptions )
   console.log('Message sent: %s', info.response)
   } catch (error) {
    console.error('Error occured while sending email: ', error)
    throw error
   }
}

module.exports={sendEmailWithNodemailer}