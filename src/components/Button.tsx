import type { FormEventHandler, MouseEventHandler } from 'react';

interface ButtonProps {
	children: string | React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	width?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	onSubmit?: FormEventHandler<HTMLButtonElement>;
}

export default function Button({
	children,
	width = 'fit',
	type,
	onClick,
	onSubmit,
}: ButtonProps) {
	return (
		<button
			type={type}
			className={`w-${width} bg-contrast hover:opacity-50 py-2 px-4  rounded text-white font-bold flex justify-center`}
			onClick={onClick}
			onSubmit={onSubmit}
		>
			{children}
		</button>
	);
}
