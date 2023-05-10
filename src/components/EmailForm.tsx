'use client';

import { useState } from 'react';
import { ValidationError } from 'yup';

import ToastMessage, { ToastState } from './ToastMessage';
import Button from './Button';
import { RiLoader5Fill } from 'react-icons/ri';
import { BiLoaderAlt } from 'react-icons/bi';
import loaderIcon from '../../public/icons/loader.svg';

import {
	EamilFormUserInput,
	EmailFormErrorMessage,
	emailFormSchema,
	MESSAGE_MAX_LENGTH,
} from '@/util/yup';
import { sendEmail } from '@/service/sendEmail';
import Image from 'next/image';

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

	const [isLoading, setIsLoading] = useState(false);

	const handleClickSubmit = async () => {
		setIsLoading(true);
		setErrorMessage({ email: '', subject: '', message: '' });

		try {
			await emailFormSchema.validate(userInput, { abortEarly: false });

			sendEmail(userInput)
				.then(() => {
					setToastState(() => ({
						type: 'success',
						message: '메일을 성공적으로 보냈습니다.',
					}));
					setUserInput({ email: '', subject: '', message: '' });
				})
				.catch(err =>
					setToastState(() => ({
						type: 'error',
						message: '메일을 보내는데 실패하였습니다. 다시 시도해주세요!',
					}))
				)
				.finally(() => setIsLoading(false));
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

			setIsLoading(false);
		}
	};

	const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setUserInput(prev => ({ ...prev, [name]: value }));
	};

	return (
		<section className="flex flex-col items-center py-4">
			<h2 className="text-4xl mt-4">Send me an Email</h2>
			<div className="my-3">
				<ToastMessage state={toastState} />
			</div>
			<form className="flex flex-col gap-2 w-[350px] p-6 bg-slate-600 rounded-xl">
				<div>
					<label className="mb-1" htmlFor="email">
						Your Email
					</label>
					<input
						className="w-full text-black"
						id="email"
						type="email"
						name="email"
						required
						autoFocus
						value={userInput.email}
						onChange={handlechange}
					/>
					{errorMessage.email && (
						<p className="mt-1 text-red-600 text-sm">{errorMessage.email}</p>
					)}
				</div>
				<div>
					<label className="mb-1" htmlFor="subject">
						Subject
					</label>
					<input
						className="w-full text-black"
						id="subject"
						name="subject"
						type="text"
						required
						value={userInput.subject}
						onChange={handlechange}
					/>
					{errorMessage.subject && (
						<p className="mt-1 text-red-600 text-sm">{errorMessage.subject}</p>
					)}
				</div>
				<div>
					<label className="mb-1" htmlFor="message">
						Message
					</label>
					<textarea
						className="w-full text-black"
						id="message"
						name="message"
						required
						spellCheck={false}
						rows={8}
						maxLength={MESSAGE_MAX_LENGTH}
						value={userInput.message}
						onChange={handlechange}
					/>
					{errorMessage.message && (
						<p className="text-red-600 text-sm">{errorMessage.message}</p>
					)}
				</div>

				<Button
					type="button"
					width="full"
					onClick={isLoading ? undefined : handleClickSubmit}
				>
					{isLoading ? (
						<Image src={loaderIcon} alt="loader" width={30} height={30} />
					) : (
						'Submit'
					)}
				</Button>
			</form>
		</section>
	);
}
