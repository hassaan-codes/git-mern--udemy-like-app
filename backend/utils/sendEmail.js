const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "27c527a3125935",
          pass: "743a4516444193"
        }
      });

    await transport.sendMail({
        to,
        subject,
        text,
        from: "UdemyReplicas@gmail.com"
    });
}

module.exports = sendEmail;