import useDidMountEffect from '@/hooks/useDidMountEffect';
import { useEffect, useState } from 'react';

export interface ToastState {
	type: 'success' | 'error';
	message: string;
}

interface ToastMessageProps {
	state: ToastState;
}

export default function ToastMessage({ state }: ToastMessageProps) {
	const { type, message } = state;
	const [show, setShow] = useState(false);

	useDidMountEffect(() => {
		setShow(true);
		setTimeout(() => {
			setShow(false);
		}, 3000);
	}, [state]);

	const isSucess = type === 'success';

	return (
		<div
			className={`flex flex-col justify-center w-full ${
				show ? `h-[40px]` : 'h-[0px]'
			} transition-all duration-500 linear overflow-hidden `}
		>
			<div className={`flex gap-4 px-4 py-2 ${isSucess ? 'bg-green-400' : 'bg-red-400'}`}>
				<span className="">{isSucess ? '✅' : '🔥'}</span>
				<span className="">{message}</span>
			</div>
		</div>
	);
}
