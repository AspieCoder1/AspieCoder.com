import { authExchange } from '@urql/exchange-auth';

const customAuthExchange = authExchange(async (utils) => {
	const token = process.env.CF_DELIVERY_ACCESS_TOKEN;
	return {
		addAuthToOperation(operation) {
			if (!token) return operation;
			return utils.appendHeaders(operation, {
				Authorization: `Bearer ${token}`,
			});
		},
		didAuthError(error) {
			return error.graphQLErrors.some(
				(e) => e.extensions?.code === 'FORBIDDEN'
			);
		},
		async refreshAuth() {},
	};
});

export { customAuthExchange };
