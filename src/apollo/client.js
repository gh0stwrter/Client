import ApolloClient from 'apollo-boost';
import { createUploadLink } from "apollo-upload-client";
import {InMemoryCache} from "apollo-cache-inmemory"

const cache = new InMemoryCache();
const link = new createUploadLink({uri: 'http://localhost:8001/api'})
const client = new ApolloClient({
  uri: 'http://localhost:8001/api',
  link: link,
  cache,

});

  export default client;