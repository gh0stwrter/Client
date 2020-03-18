import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from 'apollo-client';
import { createUploadLink } from "apollo-upload-client";
import resolvers from "./resolvers/index";
import {DATA_PLAYER} from "apollo/uploads.js"
import env from "envGetter";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `http://${env.api.url}:${env.api.pass}/api`,
  link :  createUploadLink({uri: `http://${env.api.url}:${env.api.port}/api`}),
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