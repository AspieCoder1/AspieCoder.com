import { createClient, EntryCollection } from 'contentful';

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
};

const getPage = async (slug: string): Promise<TBlogPost> => {
	const query = {
		limit: 1,
		include: 10,
		locale: 'en-US',
		'fields.slug': slug,
		content_type: 'blogPost',
		// 'fields.content.sys.contentType.sys.id': params.pageContentType,
	};
	const {
		items: [page],
	} = await client.getEntries<TBlogPost>(query);
	return page.fields || { title: 'not found', slug: 'not found', article: 'not found' };
};

const getSummary = async (slugs: string[]) => {
	// Promise.all converts an array of promises to a single promise and ensures everything returns correctly
	return Promise.all(
		slugs.map(async slug => {
			const { title, author, date } = await getPage(slug);
			return { title, author, date };
		})
	);
};

const getEntries = (): Promise<EntryCollection<unknown>> => {
	return client.getEntries();
};

const getSlugs = async (): Promise<string[]> => {
	const query = {
		locale: 'en-US',
		content_type: 'blogPost',
		limit: 10,
	};

	const { items } = await client.getEntries<TBlogPost>(query);
	return items.map(item => item.fields.slug);
};

getSlugs();

export { getPage, getEntries, getSlugs, getSummary };
