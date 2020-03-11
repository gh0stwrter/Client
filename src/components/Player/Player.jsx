import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const useStyles = makeStyles(theme => ({
    player: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 10
    }
}));

export default function Player() {
    const [isPlayed, setIsPlayed] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        window.addEventListener("storage", e => {
            console.log(e);
        });
    }, []);

    return isPlayed ? (
        <div className={classes.player}>
            <button onClick={()=> setIsPlayed(false)}>Close</button>
            <AudioPlayer
                // "https://freesound.org/data/previews/507/507106_8682843-lq.mp3"
                //src={}
                onPlay={e => console.log(e)}
                onPlayError={err => console.log(err)}
            />
        </div>
    ) : (
        <div className={classes.player}>
            <button onClick={()=> setIsPlayed(true)}>Open</button>
        </div>
    )
}
