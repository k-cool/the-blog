import { notFound } from 'next/navigation';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import HighlightedCode from '@/components/HighlightedCode';

import { getPostMD, getPostMetaData } from '@/service/staticData';
import type { CodeProps } from 'react-markdown/lib/ast-to-react';
import PostNavigator from '@/components/PostNavigator';
import { IPostNavigatorData } from '@/types/post.type';

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

	return (
		<div className="p-4">
			<h1>{slug}</h1>
			<section className="mb-8">
				<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code }}>
					{postMD}
				</ReactMarkdown>
			</section>
			<PostNavigator data={postNavigatorData} />
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
