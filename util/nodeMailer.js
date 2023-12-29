const nodemailer = require('nodemailer')


const transpoter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        // user: 'nurjamanshekh.wikiance@gmail.com',
        // pass: 'bzyylbiukyabimnb'
        user: 'techiies39@gmail.com',
        pass: 'zwpttmxfgbkubyhg'
    }
})

const sendEmailWithNodemailer = async (emailData)=>{
   try {
    const mailOptions = {
        // from: 'nurjamanshekh.wikiance@gmail.com',
        from: 'techiies39@gmail.com',
        to: emailData.email,
        subject: emailData.subject,
        html: emailData.html
    }
   const info = await transpoter.sendMail( mailOptions )
   console.log('Message sent: %s', info.response)
   if(info.response){
        return true
   }
   } catch (error) {
    console.error('Error occured while sending email: ', error.response)
    throw error
   }
}

module.exports={sendEmailWithNodemailer}
