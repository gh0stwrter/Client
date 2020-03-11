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
        zIndex: 10,
    }
}));

export default function Player(props) {
    console.log()
    const song = Cookies.get("song")
    const [cookieSong, setCookieSong] = useState(null)
    const classes = useStyles();
    useEffect(() => {
        if(song){
            setCookieSong(song)
            //playerMethod.show_player(true)

        }
      
    }, [cookieSong]);
            console.log(cookieSong)
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
    );
}