import nodemailer from 'nodemailer';

export interface IEmailData {
	from: string;
	subject: string;
	message: string;
}

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.AUTH_USER,
		pass: process.env.AUTH_PASS,
	},
});

export async function sendEmail({ from, subject, message }: IEmailData) {
	const mailOption = {
		from,
		to: process.env.AUTH_USER,
		subject: `[BLOG] ${subject}`,
		html: `
    <h1>${subject}</h1>
    <p>${message}</p>
    <br/>
    <p>보낸사람: ${from}</p>
    `,
	};

	return transporter.sendMail(mailOption);
}
