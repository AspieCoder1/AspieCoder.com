/*
 * Copyright (c) 2022. AspieCoder
 */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGfm from 'remark-gfm';

import { getPage, getSlugs, TBlogPost } from '@libs/contentfulClient';
import ReactMarkdown from 'react-markdown';

import readingTime, { ReadTimeResults } from 'reading-time';

import Header from '@components/Header';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@components/Layout';
import { getMarkdownSettings } from '@utils/remarkStyling';
import rehypeRaw from 'rehype-raw';
import smartypants from 'remark-smartypants';

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
	if (!fields) {
		return {
			notFound: true,
		};
	}
	const timeToRead = readingTime(fields.article);
	return { props: { ...fields, readingTime: timeToRead } };
};

const Posts: NextPage<Props, {}> = (props) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.summary} />
			</Head>
			<Layout>
				<Header
					title={props.title}
					date={props.date}
					readingTime={props.readingTime.text}
					author={props.author}
				/>
				<article className="lg:mx-auto prose md:prose-lg lg:prose-xl mt-8 md:mt-16 mb-8 md:mb-16 lg:max-w-screen-lg max-w-screen-md mr-4 ml-4 lg:pr-4 lg:pl-4">
					<ReactMarkdown
						components={getMarkdownSettings()}
						remarkPlugins={[remarkGfm, remarkUnwrapImages, smartypants]}
						rehypePlugins={[rehypeRaw]}
					>
						{props.article}
					</ReactMarkdown>
				</article>
			</Layout>
		</>
	);
};

export default Posts;
