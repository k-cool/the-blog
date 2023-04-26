import useDidMountEffect from '@/hooks/useDidMountEffect';
import { useEffect, useState } from 'react';

interface ToastMessageProps {
	type: 'success' | 'error';
	message: string;
	toastSwitch: boolean;
}

export default function ToastMessage({
	type,
	message,
	toastSwitch,
}: ToastMessageProps) {
	const [show, setShow] = useState(false);

	useDidMountEffect(() => {
		setShow(true);
		setTimeout(() => {
			setShow(false);
		}, 3000);
	}, [toastSwitch]);

	const isSucess = type === 'success';

	return (
		<div
			className={`flex flex-col justify-center w-full ${
				show ? `h-[40px]` : 'h-[0px]'
			} transition-all duration-500 linear overflow-hidden `}
		>
			<div
				className={`flex gap-4 px-4 py-2 ${
					isSucess ? 'bg-green-400' : 'bg-red-400'
				}`}
			>
				<span className="">{isSucess ? '✅' : '🔥'}</span>
				<span className="">{message}</span>
			</div>
		</div>
	);
}
