export async function GET(request: Request) {
	return new Response('Hello, Next.js!');
}

// const transporter = nodemailer.createTransport({
// 	// service: 'gmail',
// 	host: 'smtp.gmail.com',
// 	auth: {
// 		user: process.env.EMAIL,
// 		pass: process.env.PASSWORD,
// 	},
// });
// console.log('durl', process.env);
