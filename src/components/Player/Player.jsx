import { makeStyles } from '@material-ui/core/styles';
import 'assets/css/PresentationPage/presentationPage.css';
import Cookies from "js-cookie";
import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {GET_URL} from "apollo/composition";
import {DATA_PLAYER} from "apollo/uploads"
import {useApolloClient, useMutation} from "@apollo/react-hooks";
import Button from '@material-ui/core/Button';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {MusicConsumer} from "_utils/CompositionContext";
const useStyles = makeStyles(theme => ({
    player: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 10,
    }
}));

export default function Player({method}) {
    const [getVideosUrl] = useMutation(GET_URL, {onCompleted(data){
        console.log(data)
    }})
    
    const [cookieSong, setCacheSong] = useState(localStorage.getItem("musicUrl"))
    const client = useApolloClient()
    useEffect(() => {
      setCacheSong(localStorage.getItem("musicUrl"))
      console.log("cookieSong: ",cookieSong)
    }, [cookieSong]);
    const {play} = client.readQuery({query: DATA_PLAYER})
    const song = Cookies.get("song")
    const [played, setPlayed] = useState(play.show)
    const classes = useStyles();

    const openPlayer = () => {
        setPlayed(true);
        method(true);
    }

    useState(()=>{
        setPlayed(play.show)
    },[play.url])

    return (played) ? (
        <div className={classes.player}>
        {console.log("song: ",cookieSong)}
        {console.log("playVar : ",play.url)}

            <button onClick={e => {
                method(false);
                setPlayed(false);
                }}>Fermer</button>
                
            <AudioPlayer
                src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${ cookieSong ? cookieSong : null}`} 
                onPlay={e => console.log(e.srcElement)}
                onPlayError={err => console.log(err)}
                preload="auto"
                loop={true}
                autoPlay={true}
                onCanPlay={e => console.log(e)}
            />
        </div>) : (
        <div className={classes.player}>
        <Button onClick={()=> openPlayer()}>Open</Button> </div>); 
    
    // : (
    //     <div className={classes.player}>
    //         <button onClick={()=> setIsPlayed(true)}>Open</button>
    //     </div>
    // )
}
