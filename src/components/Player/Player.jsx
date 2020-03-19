import { makeStyles } from '@material-ui/core/styles';
import 'assets/css/PresentationPage/presentationPage.css';
import Cookies from "js-cookie";
import React, { useEffect, useState, useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {GET_URL} from "apollo/composition";
import {DATA_PLAYER} from "apollo/uploads"
import {useApolloClient, useMutation} from "@apollo/react-hooks";
import Button from '@material-ui/core/Button';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import MusicContext from "_utils/CompositionContext";
const useStyles = makeStyles(theme => ({
    player: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 10,
    }
}));

export default function Player(props) {
    const method = props.method
    const [getVideosUrl] = useMutation(GET_URL, {onCompleted(data){
        console.log(data)
    }})
    const value = useContext(MusicContext)
    const [cookieSong, setCacheSong] = useState("")
    console.log(props)
    const client = useApolloClient()
    console.log(client.readQuery({query : DATA_PLAYER}))
    useEffect(() => {
        console.log(value)
      setCacheSong(localStorage.getItem("musicUrl"))
      console.log(cookieSong)
    }, [cookieSong]);
    const data = client.readQuery({query: DATA_PLAYER})
    const [play] = useState(data.play)
    const song = Cookies.get("song")
    const [played, setPlayed] = useState(play.show)
    const classes = useStyles();

    const openPlayer = () => {
        setPlayed(true);
        method(true);
;    }
    
    return played ? (
        <div className={classes.player}>
            <button onClick={e => {
                method(false);
                setPlayed(false);
                }}>Fermer</button>
                
            <AudioPlayer
                src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${ play ? play.url : null}`} 
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
