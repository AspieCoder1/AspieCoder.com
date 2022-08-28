/*
 * Copyright (c) 2022. AspieCoder
 */

import { createClient, Entry } from 'contentful';

const { CF_SPACE_ID, CF_DELIVERY_ACCESS_TOKEN } = process.env;

const client = createClient({
	space: CF_SPACE_ID ?? '', // ID of a Compose-compatible space to be used \
	accessToken: CF_DELIVERY_ACCESS_TOKEN ?? '', // delivery API key for the space \
});

export type TBlogPost = {
	title: string;
	slug: string;
	article: string;
	author: string;
	date: string;
};

export type TSummary = {
	title: string;
	author: string;
	date: string;
	slug: string;
	excerpt: string;
};

const getMarkdownExcerpt = (markdown: string, maxExcerptLength = 120) => {
	// Trim and normalize whitespace in content text
	const contentText = markdown.trim().replace(/\s+/g, ' ');
	const excerpt = contentText.slice(0, maxExcerptLength);

	if (contentText.length > maxExcerptLength) {
		return excerpt + '...';
	}

	return excerpt;
};

const getPage = async (slug: string): Promise<TBlogPost> => {
	const query = {
		limit: 1,
		include: 10,
		locale: 'en-US',
		'fields.slug': slug,
		content_type: 'blogPost',
	};
	const {
		items: [page],
	} = await client.getEntries<TBlogPost>(query);
	return (
		page.fields || {
			title: 'not found',
			slug: 'not found',
			article: 'not found',
		}
	);
};

const getSummaryPages = async (): Promise<Entry<TBlogPost>[]> => {
	const query = {
		locale: 'en-US',
		content_type: 'blogPost',
		limit: 10,
	};

	const { items } = await client.getEntries<TBlogPost>(query);
	return items;
};

const getSummary = async (): Promise<TSummary[]> => {
	// Promise.all converts an array of promises to a single promise and ensures everything returns correctly
	const pages = await getSummaryPages();
	return pages.map((page) => {
		const { article, ...fields } = page.fields;
		return { ...fields, excerpt: getMarkdownExcerpt(article, 400) };
	});
};

const getSlugs = async (): Promise<string[]> => {
	const query = {
		locale: 'en-US',
		content_type: 'blogPost',
		limit: 10,
	};

	const { items } = await client.getEntries<TBlogPost>(query);
	return items.map((item) => item.fields.slug);
};

export { getPage, getSlugs, getSummary };
