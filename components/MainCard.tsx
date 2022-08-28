/*
 * Copyright (c) 2022. AspieCoder
 */

import { TSummary } from '@utils/contentfulClient';
import Link from 'next/link';

type Props = {
	content: TSummary;
};

const MainCard = (props: Props) => {
	const { title, author, date, slug, excerpt } = props.content;
	return (
		<div className="card bg-white p-4 rounded-md drop-shadow">
			<Link href={`posts/${slug}`} passHref>
				<a>
					<h1 className="md:text-6xl text-xl text-bold text-left">{title}</h1>
					<div className="flex">
						<p className="md:text-xl text-lg text-left text-gray-400">
							{author}
						</p>
						<p className="md:text-xl text-lg text-left ml-4 text-gray-400">
							{date}
						</p>
					</div>
					<p className="md:text-lg mt-2">{excerpt}</p>
				</a>
			</Link>
		</div>
	);
};

export default MainCard;
