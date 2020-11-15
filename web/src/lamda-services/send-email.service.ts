import nodemailer from 'nodemailer';

export const sendEmail = ({ name, email, content }: { name: string; email: string; content: string }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.gmailUser,
      pass: process.env.gmailPass,
    },
  });

  const usedContent = content ?? '';

  const mailOptions = {
    from: email,
    to: process.env.gmailUser,
    subject: `Email de ${name} : ${email}`,
    text: `El usuario ${name} envio el siguiente mensaje:\n\n${usedContent}.\n\nResponder a ${email}`,
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
