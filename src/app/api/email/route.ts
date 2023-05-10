import { sendEmail } from '@/util/nodeMailer';
import { nodemailerSchema } from '@/util/yup';

export async function GET(req: Request) {
	return new Response('email get!');
}

export async function POST(req: Request) {
	const body = await req.json();
	const isValidated = await nodemailerSchema.isValid(body);

	if (!isValidated)
		return new Response(JSON.stringify({ message: '유효한 양식이 아닙니다.' }), {
			status: 400,
		});

	return sendEmail(body) //
		.then(
			() =>
				new Response(JSON.stringify({ message: '메일을 성공적으로 보냈습니다.' }), {
					status: 200,
				})
		)
		.catch(err => {
			console.error(err);
			new Response(JSON.stringify({ message: '메일 전송에 실패함' }), { status: 500 });
		});
}
