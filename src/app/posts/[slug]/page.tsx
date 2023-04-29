import Image from 'next/image';
import { notFound } from 'next/navigation';

import PostNavigator from '@/components/PostNavigator';
import { AiTwotoneCalendar } from 'react-icons/ai';

import { getPostMD, getPostMetaData } from '@/service/staticData';
import type { IPostNavigatorData } from '@/types/post.type';
import MarkdownViewer from '@/components/MarkdownViewer';

interface PostPageProps {
	params: {
		slug: string;
	};
}

// 페이지 메타정보 입력해주기
// export async function generateMetadata({ params: { slug } }: Props) {
// const product = await getProduct(slug);
// return { title: `Good | ${product?.name}` };
// }

export default async function PostPage({ params: { slug } }: PostPageProps) {
	const postNavigatorData = (await getPostMetaData(slug, true)) as IPostNavigatorData;
	const postMD = (await getPostMD(slug)) as string;

	if (!postNavigatorData || !postMD) return notFound();

	const {
		target: { title, thumb, createdAt, description },
	} = postNavigatorData;

	return (
		<div className="flex justify-center py-6">
			<section className="w-[95%] bg-themeBlack rounded-2xl overflow-hidden">
				<div className="relative h-[200px]">
					<Image
						className="w-full h-1/5 object-cover brightness-75"
						fill
						src={thumb}
						alt={title}
					/>
				</div>
				<div className="p-4">
					<div className="flex justify-end text-sm text-contrast">
						<div className="flex items-center gap-2">
							<AiTwotoneCalendar size={18} />
							<span>{new Date(createdAt).toIntlString()}</span>
						</div>
					</div>
					<h2 className="text-4xl">{title}</h2>
					<p className="text-sm">{description}</p>
					<div className="w-[150px] h-1 bg-contrast mt-2" />
					<div className="py-10">
						<MarkdownViewer postMD={postMD} />
					</div>
				</div>
				<div>
					<PostNavigator data={postNavigatorData} />
				</div>
			</section>
		</div>
	);
}
