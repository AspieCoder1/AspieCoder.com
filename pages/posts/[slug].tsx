import { getPage } from '@utils/contentfulClient';
import { GetServerSideProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

type Props = {
	title: string;
	slug: string;
	article: string;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const fields = await getPage(params!.slug as string);
	return { props: fields };
};

const Posts: NextPage<Props, {}> = props => {
	return (
		<>
			<header className='flex flex-col items-center justify-center w-full text-center'>
				<h1 className='text-6xl font-bold'>{props.title}</h1>
			</header>
			<main>
				<ReactMarkdown>{props.article}</ReactMarkdown>
			</main>
		</>
	);
};

export default Posts;
