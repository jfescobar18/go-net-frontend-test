import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: "https://go-net-api-test.herokuapp.com/graphql",
    cache: new InMemoryCache(),
})

export default client