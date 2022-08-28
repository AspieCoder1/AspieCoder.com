/*
 * Copyright (c) 2022. AspieCoder
 */

import { TSummary } from '@utils/contentfulClient';
import Link from 'next/link';

type Props = {
	content: TSummary;
};

const PostCard = (props: Props) => {
	const { title, author, date, slug, excerpt } = props.content;
	return (
		<div className="card bg-white p-4 rounded-md drop-shadow">
			<Link href={`posts/${slug}`} passHref>
				<a>
					<h1 className="text-4xl text-bold text-left">{title}</h1>
					<div className="flex">
						<p className="text-lg text-left text-gray-400">{author}</p>
						<p className="text-lg text-left ml-4 text-gray-400">{date}</p>
					</div>
					<p className="mt-2">{excerpt}</p>
				</a>
			</Link>
		</div>
	);
};

export default PostCard;
