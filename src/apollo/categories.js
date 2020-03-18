import {gql} from "apollo-boost";

export const GET_ALL_CATEGORIES = gql`
query{
  getCategories{
    _id
    name
  }
}
`

export const GET_CACHE_CATEGORY = gql`
   query categories {
    getCategories @client{  
          _id
        name
        __typename
        
        }
}
`