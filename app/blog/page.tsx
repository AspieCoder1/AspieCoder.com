/*
 * Copyright (c) 2023. AspieCoder
 */

import * as React from 'react';
import { cacheExchange, createClient, fetchExchange } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

import Card from '@components/Card';
import { graphqlURL } from '@libs/graphql/graphqlClient';
import {
	MostRecentPostsQueryDocument,
	MostRecentPostsQueryQuery,
} from '@generated/generated';
import { customAuthExchange } from '@libs/graphql/auth';
import { Suspense } from 'react';
import { Metadata } from 'next';

const makeClient = () => {
	return createClient({
		url: graphqlURL,
		exchanges: [cacheExchange, customAuthExchange, fetchExchange],
	});
};

const { getClient } = registerUrql(makeClient);

const RecentPosts = async () => {
	const result = await getClient().query<MostRecentPostsQueryQuery>(
		MostRecentPostsQueryDocument,
		{}
	);

	return (
		<div className="mt-5 grid grid-cols-1 md:grid-cols-2 w-full gap-6">
			{result.data?.blogPostCollection?.items?.map((post, _) => {
				return <Card key={post?.slug} content={post} />;
			})}
		</div>
	);
};

export const metadata: Metadata = {
	title: 'Blog | AspieCoder.com',
};

const Page = () => {
	return (
		<>
			<section
				id="hero"
				className="grad-4-1 w-full py-10 pt-72 pb-16 drop-shadow-md"
			>
				<div className="max-w-screen-xl mx-auto">
					<h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-white">
						Blog
					</h1>
					<h2 className="text-white pt-5 text-xl">
						Read my latest blog posts were I discuss my research and other
						machine learning topic that takes my fancy
					</h2>
				</div>
			</section>
			<main className="mx-auto flex-1 max-w-screen-xl px-4 md:px-0 bg-gray-100">
				<h1 className="text-center">Search goes here</h1>
				<Suspense fallback={<p>Loading</p>}>
					<RecentPosts />
				</Suspense>
			</main>
		</>
	);
};

export default Page;
