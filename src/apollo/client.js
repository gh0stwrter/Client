import ApolloClient from 'apollo-boost';
import { createUploadLink } from "apollo-upload-client";
import {InMemoryCache} from "apollo-cache-inmemory"
import { HttpLink, createHttpLink} from "apollo-link-http";
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:8001/api',
  link : new createUploadLink({uri: 'http://localhost:8001/api'}),
  cache,

});

  export default client;