import ApolloClient from 'apollo-client';
import { createUploadLink } from "apollo-upload-client";
import {InMemoryCache} from "apollo-cache-inmemory"
import { HttpLink, createHttpLink} from "apollo-link-http";
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:8002/api',
  link :  createUploadLink({uri: 'http://localhost:8002/api'}),
  cache,

});

  export default client;