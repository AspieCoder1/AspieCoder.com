/*
 * Copyright (c) 2022. AspieCoder
 */
import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { getMostRecentPosts, TBlogPost } from '@utils/contentfulClient';
import PostCard from '@components/PostCard';
import Layout from '@components/Layout';
import Head from 'next/head';

type Props = {
	posts: TBlogPost[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts = await getMostRecentPosts();
	return { props: { posts } };
};

const Blog: NextPage<Props, {}> = (props): JSX.Element => {
	return (
		<Layout>
			<Head>
				<title>Blog | AspieCoder</title>
			</Head>
			<section
				id="hero"
				className="bg-black w-full py-10 px-4 md:px-32 min-h-[25vh] drop-shadow-md"
			>
				<h1 className="text-6xl text-white font-mono">Blog</h1>
				<h2 className="text-white pt-5 text-4xl">Read my latest blog posts</h2>
			</section>
			<main className="flex flex-col items-center justify-center flex-1 pt-10 px-4 md:px-32 bg-gray-100">
				<div className="mt-4 grid grid-cols-1 w-full gap-6 mb-10">
					{props.posts.map((post, index) => (
						<PostCard key={index} content={post} />
					))}
				</div>
			</main>
		</Layout>
	);
};

export default Blog;
