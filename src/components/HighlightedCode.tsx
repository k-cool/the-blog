'use client';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsClipboard, BsFillClipboardCheckFill } from 'react-icons/bs';
import { useState } from 'react';

interface HighlightedCodeProps {
	codeStirng: string;
	language: string;
}

const custumStyle = {
	backgroundColor: '#282c34',
	margin: '10px',
	borderRadius: '8px',
	ShadowRoot: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
};

export default function HighlightedCode({ codeStirng, ...others }: HighlightedCodeProps) {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(codeStirng);
		setCopied(true);
	};

	return (
		<div className="relative">
			{copied ? (
				<BsFillClipboardCheckFill
					size={20}
					className="absolute top-3 right-6 cursor-pointer"
					onClick={copyToClipboard}
				/>
			) : (
				<BsClipboard
					size={20}
					className="absolute top-3 right-6 cursor-pointer"
					onClick={copyToClipboard}
				/>
			)}
			<SyntaxHighlighter
				style={oneDark}
				PreTag="div"
				customStyle={custumStyle}
				showLineNumbers
				{...others}
			>
				{codeStirng}
			</SyntaxHighlighter>
		</div>
	);
}
