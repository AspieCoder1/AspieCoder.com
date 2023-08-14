/*
 * Copyright (c) 2023. AspieCoder
 */

import * as React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { graphqlURL } from '@libs/graphql/graphqlClient';
import { customAuthExchange } from '@libs/graphql/auth';
import { registerUrql } from '@urql/next/rsc';
import { createClient, cacheExchange, fetchExchange } from '@urql/core';
import { GetPostQueryDocument, SlugsQueryDocument } from '@generated/generated';
import Header from '@components/Header';
import ReactMarkdown from 'react-markdown';
import { getMarkdownSettings } from '@utils/remarkStyling';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import smartypants from 'remark-smartypants';
import rehypeRaw from 'rehype-raw';
import readingTime from 'reading-time';

type Props = {
	params: { slug: string };
};

const makeClient = () => {
	return createClient({
		url: graphqlURL,
		exchanges: [cacheExchange, customAuthExchange, fetchExchange],
	});
};

const { getClient } = registerUrql(makeClient);

export const generateStaticParams = async () => {
	const result = await getClient().query(SlugsQueryDocument, {});

	return result.data?.blogPostCollection?.items.map((item) => ({
		slug: item?.slug,
	}));
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const result = await getClient().query(GetPostQueryDocument, {
		slug: params.slug,
	});

	const post = result?.data?.blogPostCollection?.items[0];

	return {
		title: `${post?.title} | AspieCoder.com`,
		openGraph: {
			type: 'website',
			url: `https://aspiecoder.com/${params.slug}`,
			siteName: 'aspiecoder.com',
		},
	};
};
const Page = async ({ params }: { params: { slug: string } }) => {
	const result = await getClient().query(GetPostQueryDocument, {
		slug: params.slug,
	});

	const post = result?.data?.blogPostCollection?.items[0];
	const timeToRead = readingTime(post?.article ?? '');

	return (
		<>
			<Header
				title={post?.title}
				date={post?.date}
				readingTime={timeToRead.text}
				author={post?.author?.name}
			/>
			<article className="lg:mx-auto prose md:prose-lg lg:prose-xl my-8 md:my-16 lg:max-w-screen-xl max-w-screen-md mr-4 ml-4 lg:pr-4 lg:pl-4">
				<ReactMarkdown
					components={getMarkdownSettings()}
					remarkPlugins={[remarkGfm, remarkUnwrapImages, smartypants]}
					rehypePlugins={[rehypeRaw]}
				>
					{post?.article ?? 'Article has no content'}
				</ReactMarkdown>
			</article>
		</>
	);
};

export default Page;
