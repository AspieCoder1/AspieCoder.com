import { TSummary } from '@utils/contentfulClient';
import Link from 'next/link';

type Props = {
	content: TSummary;
};

const PostCard = (props: Props) => {
	const { title, author, date, slug, excerpt } = props.content;
	return (
		<div>
			<Link href={`posts/${slug}`} passHref>
				<a>
					<h1 className='text-4xl text-bold text-left'>{title}</h1>
					<div className='flex'>
						<p className='text-lg text-left'>{author}</p>
						<p className='text-lg text-left ml-4'>{date}</p>
					</div>
					<p className='mt-2'>{excerpt}</p>
				</a>
			</Link>
		</div>
	);
};

export default PostCard;
