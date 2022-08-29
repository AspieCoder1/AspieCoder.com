/*
 * Copyright (c) 2022. AspieCoder
 */
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

export const getMarkdownSettings = ():
	| Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>
	| undefined => ({
	code: ({ inline, className, children, ...codeProps }) => {
		const match = /language-(\w+)/.exec(className || '');
		return !inline && match ? (
			<SyntaxHighlighter
				style={materialLight}
				language={match[1]}
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
		) : (
			<code
				className={`${
					className ?? ''
				} pl-1 pr-1 font-mono font-normal bg-gray-200 rounded-md`}
				{...codeProps}
			>
				{children}
			</code>
		);
	},
	img: ({ src, alt }) => {
		const title = alt ?? '';
		const [name, dimensions] = title.split('(');
		const [width, height] = dimensions
			.trim()
			.replace(/[()]/g, '')
			.split('x')
			.map((val) => Number(val));
		const imageWidth = width < 1024 ? width : 1024;
		const imageHeight = height * (imageWidth / width);
		return (
			<div className="flex justify-center">
				<Image
					className="mx-auto"
					src={src ?? ''}
					alt={name.trim()}
					layout="intrinsic"
					width={imageWidth}
					height={imageHeight}
					placeholder="blur"
					blurDataURL={src ?? ''}
				/>
			</div>
		);
	},
});
