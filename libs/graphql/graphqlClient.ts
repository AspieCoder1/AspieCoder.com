// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const link = createHttpLink({
// 	uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}`,
// 	credentials: 'same-origin',
// });

// const authLink = setContext((_, { headers }) => {
// 	// get the authentication token from local storage if it exists
// 	const token = localStorage.getItem('token');
// 	// return the headers to the context so httpLink can read them
// 	return {
// 		headers: {
// 			...headers,
// 			authorization: `Bearer ${process.env.CF_DELIVERY_ACCESS_TOKEN}`,
// 		},
// 	};
// });

// const client = new ApolloClient({
// 	link: authLink.concat(link),
// 	cache: new InMemoryCache(),
// });

import {
	createClient,
	dedupExchange,
	cacheExchange,
	fetchExchange,
	ssrExchange,
	Client,
} from 'urql';
import { withUrqlClient, initUrqlClient, SSRExchange } from 'next-urql';

import { customAuthExchange } from './auth';

export const exchanges = [
	dedupExchange,
	cacheExchange,
	customAuthExchange,
	fetchExchange,
];

export const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}`;


const client = createClient({
	url: graphqlURL,
	exchanges,
});

export default client;
