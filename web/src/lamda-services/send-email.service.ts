import nodemailer from 'nodemailer';

export const sendEmail = ({ name, email, content }: { name: string; email: string; content: string }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const usedName = name ?? email;
  const usedContent = content ?? '';

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Email from ${usedName}`,
    text: `El usuario ${usedName} envio el siguiente mensaje: ${usedContent}. Responder a ${email}`,
  };

  const sendMailPromise = () => {
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        return error ? reject(error) : resolve(info);
      });
    });
  };

  return sendMailPromise();
};
