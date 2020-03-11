import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from 'apollo-client';
import { createUploadLink } from "apollo-upload-client";
import resolvers from "./resolvers/index";
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:8007/api',
  link :  createUploadLink({uri: 'http://localhost:8007/api'}),
  cache,
  resolvers,
});

cache.writeData({data:{
  play:{
    __typename:"Play",
    url: "", 
    show: true
  },

}
})
  export default client;