/*
 * Copyright (c) 2022. AspieCoder
 */

import Link from 'next/link';
import dayjs from 'dayjs';
import Tag from '@components/Tag';
import rmMarkdown from 'remove-markdown';
import { MostRecentPostsDataFragment } from '@generated/generated';

type Props = {
	content?: MostRecentPostsDataFragment | null;
};

const Card = ({ content }: Props) => {
	return (
		<div className="card bg-white p-4 rounded-md transition ease-in-out delay-150 hover:drop-shadow-lg hover:-translate-y-1">
			<Link
				className="card bg-white p-4 rounded-md transition ease-in-out delay-150 hover:drop-shadow-lg hover:-translate-y-1"
				href={`/posts/${content?.slug}`}
				passHref
			>
				<a className="flex flex-col items-stretch h-full">
					<p className="text-lg text-left">
						{dayjs(content?.date).format('DD MMM YYYY')}
					</p>
					<h2 className="text-2xl flex-1 font-bold text-left line-clamp-3">
						{content?.title}
					</h2>
					<div className="my-2 flex flex-row space-x-4">
						{content?.tags?.map((tag: string | null, i: number) => (
							<Tag key={i}>{tag}</Tag>
						))}
					</div>
					<p className="mt-5 text-xl line-clamp-3">
						{rmMarkdown(content?.article ?? 'This post has no content')}
					</p>
					<p className="mt-3 text-normal text-left font-light">
						By {content?.author?.name}
					</p>
				</a>
			</Link>
		</div>
	);
};

export default Card;
