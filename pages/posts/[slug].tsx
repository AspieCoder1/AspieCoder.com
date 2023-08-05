/*
 * Copyright (c) 2022. AspieCoder
 */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

import readingTime, { ReadTimeResults } from 'reading-time';

import Header from '@components/Header';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@components/Layout';
import { getMarkdownSettings } from '@utils/remarkStyling';
import rehypeRaw from 'rehype-raw';
import smartypants from 'remark-smartypants';
import { createClient, fetchExchange } from '@urql/core';
import { graphqlURL } from '@libs/graphql/graphqlClient';
import {
	GetPostQueryDocument,
	GetPostQueryFragment,
	SlugsQueryDocument,
} from '@generated/generated';
import { customAuthExchange } from '@libs/graphql/auth';

type Props = {
	post?: GetPostQueryFragment;
	readingTime: ReadTimeResults;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const client = createClient({
		url: graphqlURL,
		exchanges: [customAuthExchange, fetchExchange],
	});

	const { data } = await client.query(SlugsQueryDocument, {}).toPromise();
	const slugs =
		data?.blogPostCollection?.items
			.map((item) => item?.slug)
			.filter((slug): slug is string => !!slug) ?? [];

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as Params;

	const client = createClient({
		url: graphqlURL,
		exchanges: [customAuthExchange, fetchExchange],
	});

	const { data } = await client
		.query(GetPostQueryDocument, { slug })
		.toPromise();

	if (
		!data ||
		data.blogPostCollection?.items?.length === 0 ||
		!data.blogPostCollection?.items
	) {
		return {
			notFound: true,
		};
	}

	const post = data.blogPostCollection?.items[0];
	const timeToRead = readingTime(post?.article ?? '');
	return { props: { post, readingTime: timeToRead } };
};

const Posts: NextPage<Props, {}> = ({ post, readingTime }) => {
	return (
		<>
			<Head>
				<title>{post?.title}</title>
			</Head>
			<Layout>
				<Header
					title={post?.title}
					date={post?.date}
					readingTime={readingTime.text}
					author={post?.author}
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
			</Layout>
		</>
	);
};

export default Posts;
