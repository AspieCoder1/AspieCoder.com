/*
 * Copyright (c) 2022. AspieCoder
 */

import { TBlogPost } from '@libs/contentfulClient';
import Link from 'next/link';
import dayjs from 'dayjs';
import Tag from '@components/Tag';

type Props = {
	content: TBlogPost;
};

const PostCard = (props: Props) => {
	const { title, author, date, slug, summary, tags } = props.content;
	return (
		<div className="card bg-white p-4 rounded-md drop-shadow">
			<p className="text-lg text-left">{dayjs(date).format('DD MMM YYYY')}</p>
			<Link href={`/posts/${slug}`} passHref>
				<a className="text-4xl font-bold text-left hover:text-violet-800 hover:underline">
					{title}
				</a>
			</Link>
			<div className="my-2 flex flex-row space-x-4">
				{tags.map((tag, i) => (
					<Tag key={i} content={tag} />
				))}
			</div>
			<p className="mt-2 text-xl">{summary}</p>
			<p className="text-normal text-left font-light">By {author}</p>
		</div>
	);
};

export default PostCard;
