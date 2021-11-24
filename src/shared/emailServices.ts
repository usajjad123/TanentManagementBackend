import { clientConfig } from '../daos/Modal/DBConfig';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer');

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.DB_EMAIL,
    pass: process.env.DB_EMAIL_PASSWORD,
  },
})

export const sendEmail = async function (email: string, newPassword: string) {
  const client = await clientConfig();

  const response = await client.db('vendrDB').collection('users').findOne({ email: email });
  if (response !== null) {
    const mailOptions = {
      from: "tech inferno",
      to: email,
      subject: 'Your password has been reset',
      text: `Your new password is ${newPassword}`,
    }
    return new Promise((res, rej) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      transporter.sendMail(mailOptions, function (error: Error) {
        if (error) {
          rej(error)
        } else {
          console.log('sent');
        }
      })
    })
  }

}