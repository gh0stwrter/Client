import {gql} from "apollo-boost";

export const GET_ALL_COMPOSITIONS = gql`
query {
  getCompositions{
  _id,
  title,
  compo_type,
  category,
  file, 
  price,
  isPublish,
  image,
  }
}
`
export const playMusic = gql`
  mutation{
    getVideosUrl @client
  }
`
export const STREAM_MUSIC = gql`
      mutation playMusic($_id: ID!, $url: String, $show: Boolean, $play: Boolean) @client {
        playMusic(_id: $_id, url: $url, show: $show, play: $play) @client
         } 
`

export const DATA_PLAYER = gql`
    query {
        play @client {
            url
            _id
            show
            playActually
        }
    }`