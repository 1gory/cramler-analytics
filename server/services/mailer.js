import nodemailer from 'nodemailer';
import { config } from '../config';

export default (mailType, data) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true,
    host: 'smtp.gmail.com',
    auth: {
      user: config.production.notificationMail,
      pass: config.production.notificationPass,
    },
  });

  let output = '';
  output += data.phone ? `Телефон: ${data.phone} <br>` : '';
  output += data.comment ? `Комментарий: ${data.comment} <br>` : '';
  output += data.email ? `Email: ${data.email} <br>` : '';

  const mailOptions = {
    from: config.production.notificationMail,
    to: config.production.notificationRecipient,
    subject: mailType,
    html: output,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    }
  });
};
