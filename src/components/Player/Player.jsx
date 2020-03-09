import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'assets/css/PresentationPage/presentationPage.css';
import Cookies from "js-cookie";
import {STREAM_MUSIC}from "apollo/composition";
import { checkPropTypes } from 'prop-types';
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
    useEffect(() => {
        window.addEventListener('storage', (e) => {
            console.log(e)
        });
    }, []);
    const song = Cookies.get("song")

    return  (
        <div className={classes.player}>
            <AudioPlayer
        
                src="/Users/Hayze/Desktop/Ghost_Composer/API/src/api/graphql/services/CompositionService/../compositions/5de4001874802333419ecd04/compositions/5e654ddbc991e033ec47c50e/ÉTINCELLES_feat_Alpha-Wan_Nekfeu_SPri-Noir.mp3"
                onPlay={e => console.log(e)}
                onPlayError={err => console.log(err)}
            />
        </div>
    );
}