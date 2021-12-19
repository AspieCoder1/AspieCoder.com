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
		<>
			<header className='flex flex-col items-center justify-center w-full text-center'>
				<h1 className='text-6xl font-bold'>{props.title}</h1>
				<p>Date: {dayjs(props.date).format('MMM D, YYYY')}</p>
				<p>{props.readingTime.text}</p>
			</header>
			<main>
				<ReactMarkdown>{props.article}</ReactMarkdown>
			</main>
		</>
	);
};

export default Posts;
