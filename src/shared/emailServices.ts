import { getConfig } from '../daos/Modal/DBConfig';
import nodemailer, { SentMessageInfo } from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.DB_EMAIL,
    pass: process.env.DB_EMAIL_PASSWORD,
  },
})

export const sendEmail = async function (email: string, newPassword: string) {
  const client = getConfig();
  const response = await client.db('vendrDB').collection('users').findOne({ email: email });
  if (response !== null) {
    const mailOptions = {
      from: "tech inferno",
      to: email,
      subject: 'Your password has been reset',
      text: `Your new password is ${newPassword}`,
    }
    return new Promise((res, rej) => {
      transporter.sendMail(mailOptions, function (error: Error|null,_info: SentMessageInfo) {
        if (error) {
          rej(error)
        } else {
          console.log('sent',_info);
        }
      })
    })
  }

}