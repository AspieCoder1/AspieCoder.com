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
			<h1>{props.title}</h1>
			<ReactMarkdown>{props.article}</ReactMarkdown>
		</>
	);
};

export default Test;
