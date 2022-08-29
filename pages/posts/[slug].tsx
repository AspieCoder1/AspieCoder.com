/*
 * Copyright (c) 2022. AspieCoder
 */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGfm from 'remark-gfm';

import { getPage, getSlugs, TBlogPost } from '@utils/contentfulClient';
import ReactMarkdown from 'react-markdown';

import readingTime, { ReadTimeResults } from 'reading-time';

import Header from '@components/Header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	// materialDark,
	materialLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@components/Layout';

type Props = TBlogPost & {
	readingTime: ReadTimeResults;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const slugs = await getSlugs();
	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as Params;
	const fields = await getPage(slug);
	const timeToRead = readingTime(fields.article);
	return { props: { ...fields, readingTime: timeToRead } };
};

const Posts: NextPage<Props, {}> = (props) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.excerpt} />
			</Head>
			<Layout>
				<Header
					title={props.title}
					date={props.date}
					readingTime={props.readingTime.text}
					author={props.author}
				/>
				<article className="lg:mx-auto prose md:prose-lg lg:prose-xl mt-8 md:mt-16 lg:max-w-screen-lg max-w-screen-md mr-4 ml-4 lg:pr-4 lg:pl-4">
					<ReactMarkdown
						components={{
							code: ({ inline, className, children, ...codeProps }) => {
								const match = /language-(\w+)/.exec(className || '');
								return !inline && match ? (
									<SyntaxHighlighter
										style={materialLight}
										language={match[1]}
										wrapLongLines
										customStyle={{
											backgroundColor: 'transparent',
											padding: 0,
											margin: 0,
										}}
										codeTagProps={{
											style: {
												backgroundColor: 'transparent',
											},
										}}
									>
										{String(children).replace(/\n$/, '')}
									</SyntaxHighlighter>
								) : (
									<code
										className={`${
											className ?? ''
										} pl-1 pr-1 font-mono font-normal bg-gray-200 rounded-md`}
										{...codeProps}
									>
										{children}
									</code>
								);
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
									<div className="flex justify-center">
										<Image
											className="mx-auto"
											src={src ?? ''}
											alt={name.trim()}
											layout="intrinsic"
											width={imageWidth}
											height={imageHeight}
											placeholder="blur"
											blurDataURL={src ?? ''}
										/>
									</div>
								);
							},
						}}
						remarkPlugins={[remarkGfm, remarkUnwrapImages]}
					>
						{props.article}
					</ReactMarkdown>
				</article>
			</Layout>
		</>
	);
};

export default Posts;
