import {DATA_PLAYER} from "apollo/composition"

export default {
   Mutation: {
    playMusic: async (_,{_id, url,show, play},{cache}) => {

      await cache.writeData({data:{
              play:{
                __typename:"Play",
                  _id,
                 url, 
                 show,
                 playActually: play,
                 
          }}});
          console.log(cache)
    },
    Query:{
      getDataMusicPlay : async(args,{cache}) =>{
        const {play} = cache.readQuery({query: DATA_PLAYER})
        return play;
      }
    },
   },
}