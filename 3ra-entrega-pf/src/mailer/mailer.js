import nodemailer from "nodemailer";
import { mailUser, mailPass, mailPort } from "../config/config.js";


class Mailer{
	constructor(){
		this.transport = nodemailer.createTransport({
			service: "gmail",
			port: mailPort,
			auth: {
			  user: mailUser,
			  pass: mailPass
			},
			tls: {
			  rejectUnauthorized: false
			}
				  
	})};

	sendEmail = async ()  => {
		return await this.transport.sendMail({
			from: "gomez.92m@gmail.com",
			to: "gomezz.mario.ar@gmail.com",
			subject: "Prueba VS",
			html: `<div>
				<h1>Mail de prueba</h1>
			</div>`,
			attachments: []
		});
	}
}
export default Mailer;