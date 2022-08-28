/*
 * Copyright (c) 2022. AspieCoder
 */
import * as React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { getSummary, TSummary } from '@utils/contentfulClient';
import MainCard from '@components/MainCard';
import PostCard from '@components/PostCard';
import Layout from '@components/Layout';

type Props = {
	mostRecent: TSummary;
	posts: TSummary[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const [mostRecent, ...posts] = await getSummary();
	return { props: { mostRecent, posts } };
};

const Blog: NextPage<Props, {}> = (props): JSX.Element => {
	return (
		<Layout>
			<main className="flex flex-col items-center justify-center flex-1 pt-10 px-10 bg-gray-100">
				{props.mostRecent && <MainCard content={props.mostRecent} />}
				<h2 className="md:text-5xl text-xl w-full text-center border-b md:mb-5 md:pb-5 md:mt-20 mb-5 pb-2 mt-10">
					Other posts
				</h2>
				<div className="mt-4 grid md:grid-cols-3 grid-cols-1 w-full gap-6 mb-10">
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
