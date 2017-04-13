/*
    Configuration to send an email to alert any buy or sell cryptocoin
*/
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'oracymartos@gmail.com',
        pass: 'UQGEsjSOcp',
    },
})
function email(subject, message) {
    const mailOptions = {
        from: 'oracymartos@gmail.com',
        to: 'oramartos_21@hotmail.com',
        subject,
        html: message
}
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
})
}
module.exports = email
