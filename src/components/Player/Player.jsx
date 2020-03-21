import { makeStyles } from '@material-ui/core/styles';
import 'assets/css/PresentationPage/presentationPage.css';
import React, { useEffect, useState, useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {DATA_PLAYER} from "apollo/composition";
import {useApolloClient, useQuery} from "@apollo/react-hooks";
import Button from '@material-ui/core/Button';
import "react-jinke-music-player/assets/index.css";
import MusicContext from "_utils/CompositionContext";
import {useGlobalState} from "_utils/CompositionContext";

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
    const [state, dispatch] = useGlobalState();
    console.log(state)
    const [playData, setPlayData] = useState(null)
    const [played, setPlayed] = useState(false)

    const client = useApolloClient()
    const { play } = client.readQuery({query:DATA_PLAYER})

    useEffect(() => {
        if(state) setPlayed(state.bool)
       if(play) setPlayData(play)
    }, [play, state]);
    
    const classes = useStyles();

    const openPlayer = () => {
        setPlayed(true);
    }

    

    return played  === true ? (
        <div className={classes.player}>

            <button onClick={e => {
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
        </div>) : <div className={classes.player}>
        </div>
        // <div className={classes.player}>
        // <Button onClick={()=> openPlayer()}>Open</Button> </div>); 
    
    
}
