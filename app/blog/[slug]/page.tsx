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
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import smartypants from 'remark-smartypants';
import rehypeRaw from 'rehype-raw';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import { MDXComponents } from 'mdx/types';
import rehypeCitation from 'rehype-citation/node/src';
import CodeHighlighter from '@components/CodeHighlighter';
import Image from 'next/image';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
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

	return (
		result.data?.blogPostCollection?.items.map((item) => ({
			slug: item?.slug,
		})) ?? []
	);
};

export const generateMetadata = async (
	{ params }: Props,
	_parent: ResolvingMetadata
): Promise<Metadata> => {
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

const components: MDXComponents = {
	code: ({ className, children, ...codeProps }) => {
		const match = /language-(\w+)/.exec(className ?? '') ?? '';
		return <CodeHighlighter language={match[1]}>{children}</CodeHighlighter>;
	},
	img: ({ src, alt }) => {
		const title = alt ?? '';
		const [name, dimensions] = title.split('(');
		const [width, height] = dimensions
			.trim()
			.replace(/[()]/g, '')
			.split('x')
			.map((val) => Number(val));
		const imageWidth = width < 1024 ? width : 1024;
		const imageHeight = height * (imageWidth / width);
		return (
			<figure className="flex flex-col items-center">
				<Image
					className="mx-auto"
					src={src ?? ''}
					alt={name.trim()}
					width={imageWidth}
					height={imageHeight}
					placeholder="blur"
					blurDataURL={src ?? ''}
				/>
				<figcaption>{name}</figcaption>
			</figure>
		);
	},
};

const Page = async ({ params }: Props) => {
	const result = await getClient().query(GetPostQueryDocument, {
		slug: params.slug,
	});

	const post = result?.data?.blogPostCollection?.items[0];
	const timeToRead = readingTime(post?.article ?? '');

	const { content } = await compileMDX({
		source: post?.article ?? '',
		options: {
			parseFrontmatter: false,
			mdxOptions: {
				format: 'md',
				remarkPlugins: [remarkGfm, remarkUnwrapImages, smartypants],
				rehypePlugins: [rehypeRaw, rehypeCitation],
			},
		},
		components,
	});

	return (
		<>
			<Header
				title={post?.title}
				date={post?.date}
				readingTime={timeToRead.text}
				author={post?.author?.name}
			/>
			<article className="lg:mx-auto prose md:prose-lg lg:prose-xl my-8 md:my-16 lg:max-w-screen-xl max-w-screen-md mr-4 ml-4 lg:pr-4 lg:pl-4">
				{content}
			</article>
		</>
	);
};

export default Page;
