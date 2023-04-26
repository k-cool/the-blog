'use client';

import { useState } from 'react';
import Button from './Button';
import ToastMessage from './ToastMessage';

export default function EmailForm() {
	const [userInput, setUserInput] = useState({
		email: '',
		subject: '',
		message: '',
	});
	const [toggleSwitch, setToggleSwitch] = useState(false);

	const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setUserInput({ ...userInput, [name]: value });
	};

	const handleClickSubmit = async () => {
		const { email, subject, message } = userInput;
		setToggleSwitch(p => !p);
	};

	return (
		<section className="flex flex-col items-center py-4">
			<h2 className="text-4xl mt-4">Send me an Email</h2>
			<div className="my-3">
				<ToastMessage
					type="success"
					message="메일을 성공적으로 보냈습니다."
					toastSwitch={toggleSwitch}
				/>
				{/* <ToastMessage
					type="error"
					message="메일 전송에 실패하였습니다. 다시 시도해 주세요."
					toastSwitch={toggleSwitch}
				/> */}
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
				</div>
				<div>
					<p className="mb-1">Subject</p>
					<input
						className="w-full text-black"
						name="subject"
						value={userInput.subject}
						onChange={handlechange}
					/>
				</div>
				<div>
					<p className="mb-1">Message</p>
					<textarea
						className="w-full text-black h-[200px]"
						name="message"
						value={userInput.message}
						onChange={handlechange}
						spellCheck={false}
						maxLength={1000}
					/>
				</div>
				<Button width="full" onClick={handleClickSubmit}>
					submit
				</Button>
			</div>
		</section>
	);
}
