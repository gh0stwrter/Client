import { makeStyles } from '@material-ui/core/styles';
import 'assets/css/PresentationPage/presentationPage.css';
import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Button from '@material-ui/core/Button';
import "react-jinke-music-player/assets/index.css";
import {useGlobalState} from "_utils/CompositionContext";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
const useStyles = makeStyles(theme => ({
    player: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 10,
    },
    animate: {

    }
}));

export default function Player({method}) {
    const [state, dispatch] = useGlobalState();
    const [played, setPlayed] = useState(false)
    const [playerRef, setPlayerRef] =useState(false);

    const {musicPlayed} = state;

    useEffect(() => {
        if(state.bool) setPlayed(state.bool)
    }, [ state]);
    
    const classes = useStyles();

    useEffect(()=> {
        if (playerRef.audio && !state.play)
            playerRef.audio.pause()
        else if (playerRef.audio)
            playerRef.audio.play()
    }, [state])

    return played  === true  &&  musicPlayed._id ? (
        <div className={classes.player}>

            <Button 
                onClick={e => {setPlayed(false)}}
                style={{
                    backgroundColor: "white",
                    bottom: -40,
                }}
            >
                    Fermer
            </Button>
                
            <AudioPlayer
                src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${ musicPlayed ? musicPlayed.music : null}`} 
                onPlay={e => {
                    dispatch({play:true})
                }}                
                onPlayError={err => console.log(err)}
                preload="auto"
                header={
                <GridContainer style={{textAlign:"center"}}>
                    <GridItem sm={3}>
                    <img style={{
                        borderRadius: "50%"
                    }} width="45px" height="45px" src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${ musicPlayed ? musicPlayed.image : null}`}/>
                    </GridItem>
                    <GridItem sm={6}>
                    <h5>{musicPlayed ? musicPlayed.title : null}</h5>
                    </GridItem>
                    
                    </GridContainer>}
                onPause={(e)=> {
                     dispatch({play: false})
                }}
                autoPlay={state ? state.play : false}
                ref={c => {
                    setPlayerRef(c);
                }}
            />
        </div>) : <div className={classes.player}>
        </div>
}
