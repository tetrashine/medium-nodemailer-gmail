const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      type: 'OAuth2',
      user: '[your email]',
      clientId: '',
      clientSecret: '',
      refreshToken: '',
      accessToken: ''
  }
});

let info = transporter.sendMail({
  to: '[target email]',
  subject: "Test Subject", 
  text: `Test Email`,
});