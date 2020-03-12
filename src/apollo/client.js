import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from 'apollo-client';
import { createUploadLink } from "apollo-upload-client";
import resolvers from "./resolvers/index";
import {DATA_PLAYER} from "apollo/uploads.js"

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:8007/api',
  link :  createUploadLink({uri: 'http://localhost:8007/api'}),
  cache,
  resolvers:{
    resolvers,
    Mutation:{
      getVideosUrl: async (cache, args) =>{
        console.log(cache.readQuery({query: DATA_PLAYER}))
      }
    }
  },
});

cache.writeData({data:{
  play:{
    __typename:"Play",
    url: "", 
    show: false
  },

}
})
  export default client;