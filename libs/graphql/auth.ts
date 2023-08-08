import { authExchange } from '@urql/exchange-auth';
import { makeOperation } from '@urql/core';


const customAuthExchange = authExchange<{ token: string }>({
	getAuth: async ({ authState }) => {
		if (!authState) {
			return {
				token: `Bearer ${process.env.CF_DELIVERY_ACCESS_TOKEN}`,
			};
		}
		return null;
	},
	addAuthToOperation: ({ authState, operation }) => {
		if (!authState || !authState.token) {
			return operation;
		}

		const fetchOptions =
			typeof operation.context.fetchOptions === 'function'
				? operation.context.fetchOptions()
				: operation.context.fetchOptions || {};

		return makeOperation(operation.kind, operation, {
			...operation.context,
			fetchOptions: {
				...fetchOptions,
				headers: {
					...fetchOptions.headers,
					Authorization: authState.token,
				},
			},
		});
	},
});

export { customAuthExchange };
