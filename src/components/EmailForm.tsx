'use client';

import { useState } from 'react';
import Button from './Button';

export default function EmailForm() {
	const [userInput, setUserInput] = useState({ email: '', subject: '', message: '' });

	const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setUserInput({ ...userInput, [name]: value });
	};

	return (
		<div className="flex flex-col gap-2 w-[350px] p-6 bg-slate-600 rounded-xl">
			<div>
				<p className="mb-1">Your Email</p>
				<input className="w-full text-black" name="email" value={userInput.email} onChange={handlechange} />
			</div>
			<div>
				<p className="mb-1">Subject</p>
				<input className="w-full text-black" name="subject" value={userInput.subject} onChange={handlechange} />
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
			<Button width="full">submit</Button>
		</div>
	);
}
