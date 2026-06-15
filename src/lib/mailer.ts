import nodemailer from 'nodemailer';

export function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.ionos.de',
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: 'info@immogutachter360.de',
      pass: import.meta.env.SMTP_PASS,
    },
  });
}

export const MAIL_FROM = 'immogutachter360° <info@immogutachter360.de>';
export const MAIL_TO   = 'info@immogutachter360.de';
