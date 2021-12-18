import { getPage } from '@utils/contentfulClient';
import { GetServerSideProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const fields = await getPage('how-to-add-contentful-to-a-next-js-site');
	return { props: fields };
};

type Props = {
	title: string;
	slug: string;
	article: string;
};

const Test: NextPage<Props, {}> = props => {
	return (
		<>
			<header className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
				<h1 className='text-6xl font-bold'>{props.title}</h1>
			</header>
			<ReactMarkdown>{props.article}</ReactMarkdown>
		</>
	);
};

export default Test;
