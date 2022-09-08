/*
 * Copyright (c) 2022. AspieCoder
 */
import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import PostCard from '@components/PostCard';
import Layout from '@components/Layout';
import Head from 'next/head';
import { graphqlURL } from '@libs/graphql/graphqlClient';
import {
	MostRecentPostsQueryDocument,
	MostRecentPostsQueryQuery,
} from '@generated/generated';

import { withUrqlClient } from 'next-urql';
import {
	createClient,
	fetchExchange,
} from '@urql/core';
import { customAuthExchange } from '@libs/graphql/auth';

type Props = {
	data?: MostRecentPostsQueryQuery;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const client = createClient({
		url: graphqlURL,
		exchanges: [customAuthExchange, fetchExchange],
	});

	const { data } = await client
		.query(MostRecentPostsQueryDocument, {})
		.toPromise();

	return { props: { data } };
};

const Blog: NextPage<Props, {}> = ({ data }): JSX.Element => {
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
			<main className=" flex-1 py-8 px-4 md:px-16 bg-gray-100">
				<h1 className="text-center">Search goes here</h1>
				<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
					{data?.blogPostCollection?.items?.map((post, _) => {
						return <PostCard key={post?.slug} content={post} />;
					})}
				</div>
			</main>
		</Layout>
	);
};

export default withUrqlClient((ssr) => ({
	url: graphqlURL,
}))(Blog);
