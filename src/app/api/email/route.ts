import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

const to = process.env.EMAIL;
const transporter = nodemailer.createTransport({
	service: 'gmail',
	// host: 'smtp.gmail.com',
	// port: 465,
	// secure: true,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

export async function GET(request: Request) {
	return new Response('email get!');
}

interface EmailPOSTBody {
	email: string;
	subject: string;
	message: string;
}

export async function POST(request: Request) {
	const {
		email: from,
		subject,
		message: text,
	} = request.body as unknown as EmailPOSTBody;

	console.log(process.env.EMAIL, process.env.PASSWORD);

	const mailOptions: MailOptions = { from, to, subject, text };

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.error(err);
			return new Response('error');
		} else {
			console.log('Email sent: ', info.response);

			return new Response(info.response);
		}
	});
}
