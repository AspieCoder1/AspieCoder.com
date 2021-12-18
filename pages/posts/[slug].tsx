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
			<h1>{props.title}</h1>
			<ReactMarkdown>{props.article}</ReactMarkdown>
		</>
	);
};

export default Posts;
