import type { MouseEventHandler } from 'react';

interface ButtonProps {
	children: string;
	width?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, width = 'fit', onClick }: ButtonProps) {
	return (
		<button
			className={`w-${width} bg-contrast hover:opacity-50 py-2 px-4  rounded text-white font-bold{`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
