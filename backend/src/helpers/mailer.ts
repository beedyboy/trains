import nodemailer from "nodemailer";

import accessEnv from "./accessEnv";
// const nodemailer = require("nodemailer");

// async function mailer() {

//   const transporter = nodemailer.createTransport({
//     host: MAIL_HOST,
//     port: MAIL_PORT,
//     auth: {
//       user: MAIL_USERNAME,
//       pass: MAIL_PASSWORD,
//     },
//     secure: false,
//     requireTLS: true,
//       tls: { secureProtocol: "TLSv1_method" },
//     logger: true
//   })
// }

const MAIL_HOST = accessEnv("MAIL_HOST");
const MAIL_PORT = accessEnv("MAIL_PORT");
const MAIL_USERNAME = accessEnv("MAIL_USERNAME");
const MAIL_PASSWORD = accessEnv("MAIL_PASSWORD");
const EMAIL_FROM_NAME = accessEnv("EMAIL_FROM_NAME");
const EMAIL_FROM_EMAIL = accessEnv("EMAIL_FROM_EMAIL");

const mailer = {
  getTransporter: () => {
    return nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
      tls: { secureProtocol: "TLSv1_method" },

//   debug: true, // show debug output
//   logger: true // log information in console
    });
  },

  getMailOptions: (data: any) => { 
    const { email, bcc, subject, message } = data;
    // console.log({message});
    return {
      from: `${EMAIL_FROM_NAME} <${EMAIL_FROM_EMAIL}>`,
      to: email,
      ...(bcc && { bcc: bcc }),
      subject: subject,
      html: message,
    };
  },
  sendEmail: async (data: any) => { 
    const transporter = mailer.getTransporter();
    const mailOptions = mailer.getMailOptions(data);

    return await transporter.sendMail(mailOptions);
  },
};
export default mailer;