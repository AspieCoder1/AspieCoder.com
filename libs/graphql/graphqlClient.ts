import {
	cacheExchange,
	createClient,
	dedupExchange,
	fetchExchange,
} from 'urql';

import { customAuthExchange } from './auth';

export const exchanges = [
	dedupExchange,
	cacheExchange,
	customAuthExchange,
	fetchExchange,
];

export const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}`;

export const client = createClient({
	url: graphqlURL,
	exchanges,
});
