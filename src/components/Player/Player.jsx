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
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
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
    const [playData, setPlayData] = useState({})
    const [played, setPlayed] = useState(false)

    const {musicPlayed} = state;

    useEffect(() => {
        if(state.bool) setPlayed(state.bool)
        console.log(state)
       if(musicPlayed._id) setPlayData(musicPlayed)
       console.log(playData)
    }, [ state]);
    
    const classes = useStyles();

    const openPlayer = () => {
        setPlayed(true);
    }


    return played  === true  &&  musicPlayed._id ? (
        <div className={classes.player}>

            <button onClick={e => {
                setPlayed(false);
                }}>Fermer</button>
                
            <AudioPlayer
                src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${ musicPlayed ? musicPlayed.music : null}`} 
                onPlay={e => {
                    dispatch({play:true})
                }}

                
                onPlayError={err => console.log(err)}
                preload="auto"
                loop={true}
                onListen={(e) =>{
                    console.log(e)
                }}
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
                    console.log(e)
                     dispatch({play: false})
                }}
                autoPlay={state ? state.play : false}
                onCanPlay={e => console.log(e)}
            />
        </div>) : <div className={classes.player}>
        </div>
        // <div className={classes.player}>
        // <Button onClick={()=> openPlayer()}>Open</Button> </div>); 
    
    
}
