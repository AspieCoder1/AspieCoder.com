/*
 * Copyright (c) 2022. AspieCoder
 */
import * as React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { getSummary, TBlogPost } from '@utils/contentfulClient';
import PostCard from '@components/PostCard';
import Layout from '@components/Layout';

type Props = {
	mostRecent: TBlogPost;
	posts: TBlogPost[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const [mostRecent, ...posts] = await getSummary();
	return { props: { mostRecent, posts } };
};

const Blog: NextPage<Props, {}> = (props): JSX.Element => {
	return (
		<Layout>
			<main className="flex flex-col items-center justify-center flex-1 pt-10 px-20 bg-gray-100">
				<div className="mt-4 grid grid-cols-1 w-full gap-6 mb-10">
					{Array(6)
						.fill(props.mostRecent)
						.map((_, index) => (
							<PostCard key={index} content={props.mostRecent} />
						))}
				</div>
			</main>
		</Layout>
	);
};

export default Blog;
