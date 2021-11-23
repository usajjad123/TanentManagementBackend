var nodemailer = require('nodemailer');
const { 
  connectionDB
} = require('../src/mongoDb');


var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.DB_EMAIL,
    pass: process.env.DB_EMAIL_PASSWORD,
  },
})

module.exports.sendEmail =async function (email, newPassword) {
  const client = await connectionDB();

  const response = await client.db('vendrDB').collection('users').findOne({email:email});
  if(response!==null){
    var mailOptions = {
      from: "tech inferno",
      to: email,
      subject: 'Your password has been reset',
      text: `Your new password is ${newPassword}`,
    }
  
    return new Promise((res, rej) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
          rej(error)
        } else {
         console.log('sent');
        }
      })
    })
  }
  
}