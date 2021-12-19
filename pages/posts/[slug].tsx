import { GetServerSideProps, NextPage } from 'next';

import { getPage } from '@utils/contentfulClient';
import ReactMarkdown from 'react-markdown';

import readingTime, { ReadTimeResults } from 'reading-time';

import Header from '@components/Header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
	title: string;
	slug: string;
	article: string;
	date: string;
	readingTime: ReadTimeResults;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const fields = await getPage(params!.slug as string);
	const timeToRead = readingTime(fields.article);
	console.log(timeToRead);
	return { props: { ...fields, readingTime: timeToRead } };
};

const Posts: NextPage<Props, {}> = props => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header title={props.title} date={props.date} readingTime={props.readingTime.text} />
			<article className='bg-gray-800 text-white grow'>
				<ReactMarkdown
					className=' mt-16 max-w-screen-md mx-auto text-lg'
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
								// @ts-ignore
								<SyntaxHighlighter style={materialDark} language={match[1]} wrapLongLines>
									{String(children).replace(/\n$/, '')}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props}>
									{children}
								</code>
							);
						},
					}}
				>
					{props.article}
				</ReactMarkdown>
			</article>
		</div>
	);
};

export default Posts;
