import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleOutlineIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledOutlined from '@material-ui/icons/PauseCircleOutline';
import avatar from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(theme => ({
  root: { 
      background:"#6e0d20",
      color: "white",
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


const CardMusicPlayer = (props) => {

  const [played, setPlayed] = useState(JSON.parse(localStorage.getItem('player')).played || false)
  const title = props.title;
  const author = props.autor;
  const sound = props.sound || "";

  const classes = useStyles();
  const theme = useTheme();

  const play = () => {
    let storage = JSON.parse(localStorage.getItem('player')).played
    console.log(storage);
    const data = {
      sound: sound,
      played: JSON.parse(localStorage.getItem('player')).played ? false : true,
    }
    localStorage.setItem('player', JSON.stringify(data));
    setPlayed(!played)
  }

  
  const buttonPlay = 
  played ? (
      <IconButton aria-label="play/pause" onClick={play}>
        <PauseCircleFilledOutlined 
        color="secondary" 
        className={classes.playIcon}
         />
      </IconButton> ) : (
      <IconButton aria-label="play/pause" onClick={play}>
              <PlayArrowIcon 
              color="secondary" 
              className={classes.playIcon}
               />
      </IconButton>
    )
  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" >
            {author}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        {buttonPlay}

        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={avatar}
        title="Live from space album cover"
      />
    </Card>
  );
}


export default CardMusicPlayer