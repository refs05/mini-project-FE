import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
	uri: "wss://refs05-kampusmerdeka.hasura.app/v1/graphql",
	options: {
		reconnect: true,
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"6ieL7MnGszdcC8tUWZR3Izs9XVhMde1NEpGXNjyNWjC5uAm7yqHytCmoZVcLxIhr",
			},
		},
	},
});

const httpLink = new HttpLink({
	uri: "https://refs05-kampusmerdeka.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"6ieL7MnGszdcC8tUWZR3Izs9XVhMde1NEpGXNjyNWjC5uAm7yqHytCmoZVcLxIhr",
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;