import {gql} from "apollo-boost";

export const GET_ALL_COMPOSITIONS = gql`
query {
  getCompositions{
    id
    isPublish
    title
    category
    price 
    file 
    image
  }
}
`
export const STREAM_MUSIC = gql`
      query streamMusic($composer: ID, $_id:ID!, $file: String!){
            streamMusic(composer: $composer, _id: $_id, file: $file)
            }
`
