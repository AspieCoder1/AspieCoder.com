/*
 * Copyright (c) 2023. AspieCoder
 */

'use client';

import * as React from 'react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
	language: string;
	children: React.ReactNode;
};

const CodeHighlighter = ({ language, children }: Props) => {
	return (
		<SyntaxHighlighter
			style={materialLight}
			language={language}
			wrapLongLines
			customStyle={{
				backgroundColor: 'transparent',
				padding: 0,
				margin: 0,
			}}
			codeTagProps={{
				style: {
					backgroundColor: 'transparent',
				},
			}}
		>
			{String(children).replace(/\n$/, '')}
		</SyntaxHighlighter>
	);
};

export default CodeHighlighter;
