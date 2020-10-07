import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, content }: { name: string; email: string; content: string }) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: 'Email from ' + name,
    text: `El usuario ${name} envio el siguiente mensaje: ${content}. Responder a ${email}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return error;
    } else {
      return 'Email sent: ' + info.response;
    }
  });
};
