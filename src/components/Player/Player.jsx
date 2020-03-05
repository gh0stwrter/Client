import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'assets/css/PresentationPage/presentationPage.css';


const useStyles = makeStyles(theme => ({
    player: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 10,
    }
        
}));

export default function Player() {
    const classes = useStyles();
    const [played, setPlayed] = useState(JSON.parse(localStorage.getItem('player')).played);

    useEffect(() => {
        window.addEventListener('storage', (e) => {
            console.log(e)
        });
    }, []);

    

    return played ? (
        <div className={classes.player}>
            <AudioPlayer
            // "https://freesound.org/data/previews/507/507106_8682843-lq.mp3"
                src={(JSON.parse(localStorage.getItem('player'))).sound}
                onPlay={e => console.log(played)}
                onPlayError={err => console.log(err)}
            />
        </div>
    ) : "";
}