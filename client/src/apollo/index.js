import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
// import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = new HttpLink({
    uri: 'http://localhost:8000/api',
});


const cache = new InMemoryCache();
const client = new ApolloClient({
    link: httpLink,
    cache,
});

export default client;