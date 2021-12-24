import { GetServerSideProps, NextPage } from 'next';
import remarkGfm from 'remark-gfm';

import { getPage, TBlogPost } from '@utils/contentfulClient';
import ReactMarkdown from 'react-markdown';

import readingTime, { ReadTimeResults } from 'reading-time';

import Header from '@components/Header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Head from 'next/head';

type Props = TBlogPost & {
	readingTime: ReadTimeResults;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
	const fields = await getPage(params!.slug as string);
	const timeToRead = readingTime(fields.article);
	return { props: { ...fields, readingTime: timeToRead } };
};

const Posts: NextPage<Props, {}> = props => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Head>
				<title>{props.title}</title>
			</Head>
			<Header title={props.title} date={props.date} readingTime={props.readingTime.text} author={props.author} />
			<article className='bg-gray-900 text-white grow'>
				<ReactMarkdown
					className='mt-16 lg:max-w-screen-lg lg:mx-auto max-w-screen-md mr-4 ml-4 text-lg lg:pr-4 lg:pl-4'
					components={{
						h1: ({ node, children, ...h1Props }) => (
							<h1 className='text-3xl font-bold mb-4' {...h1Props}>
								{children}
							</h1>
						),
						p: ({ children }) => <p className='mb-4'>{children}</p>,
						code: ({ node, inline, className, children, ...props }) => {
							const match = /language-(\w+)/.exec(className || '');
							return !inline && match ? (
								<SyntaxHighlighter
									style={materialDark}
									language={match[1]}
									wrapLongLines
									customStyle={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
									codeTagProps={{
										className: '',
									}}
									preTag='div'
								>
									{String(children).replace(/\n$/, '')}
								</SyntaxHighlighter>
							) : (
								<code className={`${className} pl-1 pr-1 font-mono text-lg bg-gray-800 rounded-md`} {...props}>
									{children}
								</code>
							);
						},
						img: ({ src, title }) => (
							<img className='mx-auto max-w-full h-auto mb-4 mt-4' src={src ?? ''} alt={title} />
						),
						ul: ({ children }) => <ul className='list-disc list-inside mb-4'>{children}</ul>,
					}}
					plugins={[remarkGfm]}
				>
					{props.article}
				</ReactMarkdown>
			</article>
		</div>
	);
};

export default Posts;
