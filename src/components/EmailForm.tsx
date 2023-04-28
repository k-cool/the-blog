'use client';

import { useState } from 'react';
import { ValidationError } from 'yup';

import ToastMessage, { ToastState } from './ToastMessage';
import Button from './Button';

import {
	EamilFormUserInput,
	EmailFormErrorMessage,
	emailFormSchema,
	MESSAGE_MAX_LENGTH,
} from '@/util/yup';

export default function EmailForm() {
	const [userInput, setUserInput] = useState<EamilFormUserInput>({
		email: '',
		subject: '',
		message: '',
	});

	const [errorMessage, setErrorMessage] = useState<EmailFormErrorMessage>({
		email: '',
		subject: '',
		message: '',
	});

	const [toastState, setToastState] = useState<ToastState>({
		type: 'success',
		message: '메일을 성공적으로 보냈습니다.',
	});

	const handleClickSubmit = async () => {
		const { email, subject, message } = userInput;
		setErrorMessage({ email: '', subject: '', message: '' });

		try {
			await emailFormSchema.validate(userInput, { abortEarly: false });

			setToastState(() => ({
				type: 'success',
				message: '메일을 성공적으로 보냈습니다.',
			}));
			setUserInput({ email: '', subject: '', message: '' });
		} catch (err) {
			const validationErrors: EmailFormErrorMessage = {
				email: '',
				subject: '',
				message: '',
			};

			if (err instanceof ValidationError) {
				err.inner.forEach(e => {
					validationErrors[e.path as keyof EmailFormErrorMessage] = e.message;
				});

				setErrorMessage(validationErrors);
			}
		}
	};

	const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setUserInput({ ...userInput, [name]: value });
	};

	return (
		<section className="flex flex-col items-center py-4">
			<h2 className="text-4xl mt-4">Send me an Email</h2>
			<div className="my-3">
				<ToastMessage state={toastState} />
			</div>
			<div className="flex flex-col gap-2 w-[350px] p-6 bg-slate-600 rounded-xl">
				<div>
					<p className="mb-1">Your Email</p>
					<input
						className="w-full text-black"
						name="email"
						value={userInput.email}
						onChange={handlechange}
					/>
					{errorMessage.email && (
						<p className="mt-1 text-red-600 text-sm">{errorMessage.email}</p>
					)}
				</div>
				<div>
					<p className="mb-1">Subject</p>
					<input
						className="w-full text-black"
						name="subject"
						value={userInput.subject}
						onChange={handlechange}
					/>
					{errorMessage.subject && (
						<p className="mt-1 text-red-600 text-sm">{errorMessage.subject}</p>
					)}
				</div>
				<div>
					<p className="mb-1">Message</p>
					<textarea
						className="w-full text-black h-[200px]"
						name="message"
						value={userInput.message}
						onChange={handlechange}
						spellCheck={false}
						maxLength={MESSAGE_MAX_LENGTH}
					/>
					{errorMessage.message && (
						<p className="text-red-600 text-sm">{errorMessage.message}</p>
					)}
				</div>
				<Button width="full" onClick={handleClickSubmit}>
					submit
				</Button>
			</div>
		</section>
	);
}
