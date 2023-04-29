import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import HighlightedCode from '@/components/HighlightedCode';
import PostNavigator from '@/components/PostNavigator';
import { AiTwotoneCalendar } from 'react-icons/ai';

import { getPostMD, getPostMetaData } from '@/service/staticData';
import type { IPostNavigatorData } from '@/types/post.type';
import type { CodeProps } from 'react-markdown/lib/ast-to-react';

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

	if (!postNavigatorData) return notFound();

	const postMD = (await getPostMD(slug)) as string;

	const {
		target: { title, thumb, createdAt, description },
	} = postNavigatorData;

	return (
		<div className="flex justify-center py-6">
			<section className="w-[95%] bg-themeBlack rounded-2xl overflow-hidden">
				<div className="relative h-[200px] ">
					<div className="relative w-full h-full brightness-75">
						<Image src={thumb} alt={title} fill style={{ objectFit: 'cover' }} />
					</div>
				</div>
				<div className="p-4">
					<div className="self-end text-sm text-contrast">
						<div className="flex items-center gap-2">
							<AiTwotoneCalendar size={18} />
							<span>{new Date(createdAt).toIntlString()}</span>
						</div>
					</div>
					<h2 className="text-4xl">{title}</h2>
					<p className="text-sm">{description}</p>
					<div className="w-[150px] h-1 bg-contrast mt-2" />
					<div className="py-10">
						<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code }}>
							{postMD}
						</ReactMarkdown>
					</div>
				</div>
				<div>
					<PostNavigator data={postNavigatorData} />
				</div>
			</section>
		</div>
	);
}

// react-markdown component 재정의
const code = ({ node, inline, className, children, ...props }: CodeProps) => {
	const match = /language-(\w+)/.exec(className || '');
	return !inline ? (
		<HighlightedCode
			codeStirng={String(children).replace(/\n$/, '')}
			language={(match && match[1]) || ''}
			{...props}
		/>
	) : (
		<code {...props} className={className}>
			{children}
		</code>
	);
};
