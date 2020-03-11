import { makeStyles } from '@material-ui/core/styles';
import 'assets/css/PresentationPage/presentationPage.css';
import Cookies from "js-cookie";
import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const useStyles = makeStyles(theme => ({
    player: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 10
    }
}));

export default function Player(props) {
    const song = Cookies.get("song")
    const [cookieSong, setCookieSong] = useState(null)
    const classes = useStyles();
    const [isPlayed, setIsPlayed] = useState(false);


    useEffect(() => {

    //     window.addEventListener("storage", e => {
    //     });
    // }, []);

    // return isPlayed ? (
    //     <div className={classes.player}>
    //         <button onClick={()=> setIsPlayed(false)}>Close</button>
    //         <AudioPlayer
    //             // "https://freesound.org/data/previews/507/507106_8682843-lq.mp3"
    //             //src={}

        if(song){
            setCookieSong(song)
            //playerMethod.show_player(true)

        }
      
    }, [cookieSong]);
    return  (
        <div className={classes.player}>
            <button onClick={e => {
                e.preventDefault();
                Cookies.set("show", false)
                }}>Fermer</button>
            <AudioPlayer
                src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${cookieSong ? cookieSong : null}`} 
                onPlay={e => console.log(e)}
                onPlayError={err => console.log(err)}
                preload="auto"
                loop={true}
                onCanPlay={e => console.log(e)}
            />
        </div>
    ) 
    
    // : (
    //     <div className={classes.player}>
    //         <button onClick={()=> setIsPlayed(true)}>Open</button>
    //     </div>
    // )
}
