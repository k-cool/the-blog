import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import HighlightedCode from '@/components/HighlightedCode';

import type { CodeProps } from 'react-markdown/lib/ast-to-react';
import '../styles/mdCss.css';

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
				components={{ code }}
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

// const a = ({ children, href }: any) => (
// 	<a href={href} target="_blank">
// 		{children}
// 	</a>
// );
