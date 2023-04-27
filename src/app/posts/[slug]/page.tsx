import { notFound } from 'next/navigation';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import HighlightedCode from '@/components/HighlightedCode';

import { getPostMD, getPostMetaData } from '@/service/staticData';
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
	const postMeta = await getPostMetaData(slug);
	// console.log('postmeta', postMeta);
	if (!postMeta) return notFound();

	const postMD = (await getPostMD(slug)) as string;

	return (
		<>
			<h1>{slug}</h1>
			<section className="p-4">
				<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code }}>
					{postMD}
				</ReactMarkdown>
			</section>
		</>
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
