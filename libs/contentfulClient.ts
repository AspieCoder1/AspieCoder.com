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
	summary: string;
	tags: string[];
};

const getPage = async (slug: string): Promise<TBlogPost | undefined> => {
	const query = {
		limit: 1,
		include: 10,
		locale: 'en-US',
		'fields.slug': slug,
		content_type: 'blogPost',
	};

	const { items } = await client.getEntries<TBlogPost>(query);
	if (items.length == 0) {
		return undefined;
	}
	const [{ fields }] = items;
	return (
		fields || {
			title: 'not found',
			slug: 'not found',
			article: 'not found',
			summary: 'not found',
		}
	);
};

const getMostRecentEntries = async (): Promise<Entry<TBlogPost>[]> => {
	const query = {
		locale: 'en-US',
		content_type: 'blogPost',
		limit: 10,
	};

	const { items } = await client.getEntries<TBlogPost>(query);
	return items;
};

const getMostRecentPosts = async (): Promise<TBlogPost[]> => {
	// Promise.all converts an array of promises to a single promise and ensures everything returns correctly
	const pages = await getMostRecentEntries();
	return pages.map(({ fields }) => fields);
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

export { getPage, getSlugs, getMostRecentPosts };
