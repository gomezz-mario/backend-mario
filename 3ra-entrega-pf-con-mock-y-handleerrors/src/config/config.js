import dotenv from 'dotenv';
dotenv.config();
export const port = process.env.PORT || 8080;
export const mongoUrl = process.env.MONGO_URL;
export const mailUser = process.env.MAIL_USER;
export const mailPass = process.env.MAIL_PASS;
export const mailPort = process.env.MAIL_PORT;