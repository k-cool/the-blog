import { IEmailData } from '@/util/nodeMailer';
import { EamilFormUserInput } from '@/util/yup';

export async function sendEmail(emailData: EamilFormUserInput) {
	const bodyContent: IEmailData = {
		from: emailData.email,
		subject: emailData.subject,
		message: emailData.message,
	};

	const res = await fetch('/api/email', {
		method: 'POST',
		body: JSON.stringify(bodyContent),
		headers: { 'Content-Type': 'application/json' },
	});

	const data = await res.json();

	if (!res.ok) throw new Error(data.message || '서버 요청 실패');

	return data;
}
