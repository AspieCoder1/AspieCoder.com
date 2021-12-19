import Header from '@components/Header';
import Image from 'next/image';
import { GetServerSideProps, NextPage } from 'next';
import { getPage } from '@utils/contentfulClient';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
import readingTime, { ReadTimeResults } from 'reading-time';

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
					}}
				>
					{props.article}
				</ReactMarkdown>
			</article>
		</div>
	);
};

export default Posts;
