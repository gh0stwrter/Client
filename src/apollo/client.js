import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from 'apollo-client';
import { createUploadLink } from "apollo-upload-client";
import resolvers from "./resolvers/index";
import {DATA_PLAYER} from "apollo/composition"
import env from "envGetter";

const cache = new InMemoryCache();
const client = new ApolloClient({
    uri: `http://${env.api.url}:${env.api.pass}/api`,
    link :  createUploadLink({uri: `http://${env.api.url}:${env.api.port}/api`}),
    cache,
    resolvers,
  },
);

cache.writeData({data:{
  play:{
    __typename:"Play",
    url: "", 
    _id: "",
    show: false,
    playActually: false,
  },
}
})
  export default client;