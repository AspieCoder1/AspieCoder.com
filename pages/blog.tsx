/*
 * Copyright (c) 2022. AspieCoder
 */
import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Card from '@components/Card';
import Layout from '@components/Layout';
import Head from 'next/head';
import { graphqlURL } from '@libs/graphql/graphqlClient';
import {
	MostRecentPostsQueryDocument,
	MostRecentPostsQueryQuery,
} from '@generated/generated';

import { withUrqlClient } from 'next-urql';
import { createClient, fetchExchange } from '@urql/core';
import { customAuthExchange } from '@libs/graphql/auth';

type Props = {
	data?: MostRecentPostsQueryQuery;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const client = createClient({
		url: graphqlURL,
		exchanges: [customAuthExchange, fetchExchange],
	});

	try {
		const { data } = await client
			.query(MostRecentPostsQueryDocument, {})
			.toPromise();

		if (data) {
			return { props: { data } };
		}
		return { props: {} };
	} catch (e) {
		return { props: {} };
	}
};

const Blog: NextPage<Props, {}> = ({ data }): JSX.Element => {
	return (
		<Layout>
			<Head>
				<title>Blog | AspieCoder</title>
			</Head>
			<section
				id="hero"
				className="grad-4-1 w-full py-10 pt-72 pb-16 drop-shadow-md"
			>
				<div className="max-w-screen-xl mx-auto">
					<h1 className="text-4xl text-white font-mono">Blog</h1>
					<h2 className="text-white pt-5 text-xl">Read my latest blog posts</h2>
				</div>
			</section>
			<main className="mx-auto flex-1 max-w-screen-xl px-4 md:px-0 bg-gray-100">
				<h1 className="text-center">Search goes here</h1>
				<div className="mt-5 grid grid-cols-1 md:grid-cols-2 w-full gap-6">
					{data?.blogPostCollection?.items?.map((post, _) => {
						return <Card key={post?.slug} content={post} />;
					})}
				</div>
			</main>
		</Layout>
	);
};

export default withUrqlClient((_ssr) => ({
	url: graphqlURL,
}))(Blog);
