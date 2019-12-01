/*import { ApolloClient } from 'apollo-client';w
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
// import { WebSocketLink } from 'apollo-link-ws';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import history from './constants/history';
const signOut = client => {
 localStorage.removeItem('token');
 client.resetStore();
 history.push('/admin/login');
};
const httpLink = new HttpLink({
 uri: 'http://localhost:8000/api',
});
const terminatingLink = split(
 ({ query }) => {
   const { kind, operation } = getMainDefinition(query);
   return (
     kind === 'OperationDefinition' && operation === 'subscription'
   );
 },
 httpLink,
);
const authLink = new ApolloLink((operation, forward) => {
 operation.setContext(({ headers = {} }) => {
   const token = localStorage.getItem('token');
   if (token) {
     headers = { ...headers, 'x-token': token };
   }
   return { headers };
 });
 return forward(operation);
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
 if (graphQLErrors) {
   graphQLErrors.forEach(({ message, locations, path }) => {
     console.log('GraphQL error', message);
     if (message === 'UNAUTHENTICATED') {
       signOut(client);
     }
   });
 }
 if (networkError) {
   console.log('Network error', networkError);
   if (networkError.statusCode === 401) {
     signOut(client);
   }
 }
});
const link = ApolloLink.from([authLink, errorLink, terminatingLink]);
const cache = new InMemoryCache();
const client = new ApolloClient({
 link,
 cache,
});
export default client;*/