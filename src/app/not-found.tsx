import Image from 'next/image';
import notFoundImg from '../../public/Images/404_not_found.png';

export default function DefaultNotFound() {
	return (
		<section className="w-full h-[80vh] flex flex-col justify-center items-center">
			<div className="w-[300px] sm:w-[400px]">
				<Image src={notFoundImg} alt="not found" />
			</div>
			<h2 className="text-2xl sm:text-3xl">페이지를 찾지 못했어요!</h2>
		</section>
	);
}
