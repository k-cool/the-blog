import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import HighlightedCode from '@/components/HighlightedCode';

import type { CodeProps } from 'react-markdown/lib/ast-to-react';
import '../styles/mdCss.css';
import Image from 'next/image';

interface MarkdownViewerProps {
	postMD: string;
}

export default function MarkdownViewer({ postMD }: MarkdownViewerProps) {
	const content = postMD.replaceAll('<br>', '\n&nbsp;\n');
	return (
		<article className="MarkdownViewer">
			<ReactMarkdown
				linkTarget="_blank"
				remarkPlugins={[remarkGfm]}
				components={{ code, img }}
			>
				{content}
			</ReactMarkdown>
		</article>
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

//@ts-ignore
const img = img => {
	return (
		<div className="flex justify-center my-4">
			<Image
				className="w-[90%] h-[300px] object-cover rounded-lg"
				src={img.src || ''}
				alt={img.alt || ''}
				width={500}
				height={350}
			/>
		</div>
	);
};
