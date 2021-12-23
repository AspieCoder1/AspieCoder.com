import { TSummary } from '@utils/contentfulClient';
import Link from 'next/link';

type Props = {
	content: TSummary;
};

const MainCard = (props: Props) => {
	const { title, author, date, slug, excerpt } = props.content;
	return (
		<div className='card'>
			<Link href={`posts/${slug}`} passHref>
				<a>
					<h1 className='text-6xl text-bold text-left'>{title}</h1>
					<div className='flex'>
						<p className='text-xl text-left'>{author}</p>
						<p className='text-xl text-left ml-4'>{date}</p>
					</div>
					<p className='text-lg mt-2'>{excerpt}</p>
				</a>
			</Link>
		</div>
	);
};

export default MainCard;
