import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from 'components/Card/Card';
import CardFooter from 'components/Card/CardFooter';
import {STREAM_MUSIC}from "apollo/composition";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleOutlineIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledOutlined from '@material-ui/icons/PauseCircleOutline';
import avatar from "assets/img/faces/avatar.jpg";
import Cookies from "js-cookie";
import {useQuery} from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
  root: { 
    height: "210px",
      backgroundImage:`url(${avatar})`,
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      color: "white",
      display: 'flex',
    "&:hover": {
      opacity: 0.54
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
   
  },
 
  controls: {
   },
  playIcon: {
      background:"red",
     position: "relative",
    top: "50%",
    display: "flex",
    justifContent: "center",
    "&:hover": {
      opacity: 1,
    transform: 'scale(1.3)',

  },
    border: "solid white 3px",
    borderRadius: "50%",
    height: 78,
    width: 78,
  },
}));


const CardMusicPlayer = ({title, image, composer, musicUri, id}) => {
  const [played, setPlayed] = useState(false);
  const [showButton, setShowbutton] = useState(false);
  const {data: streamMusic} = useQuery(STREAM_MUSIC, {
    onCompleted(){
        console.log(streamMusic)
    },
})
  const classes = useStyles();
  const theme = useTheme();
  
  const play = () => {
        Cookies.set('played', true)
        Cookies.set("song", `http://localhost:8007/api/api/graphql/services/compostions/${composer}/${id}/${musicUri}`)
        setPlayed(true)
        console.log(played)
  }
const pause = () =>{
  if(played === true) Cookies.set('played', false)
  setPlayed(false)
}
  const buttonPlay = 
  played ? (
      <IconButton onClick={pause} aria-label="play/pause" >
        <PauseCircleFilledOutlined 
        color="primary" 
        className={classes.playIcon}
         />
      </IconButton> ) : (
      <IconButton onClick={play} aria-label="play/pause" >
              <PlayArrowIcon 
              color="primary" 
              className={classes.playIcon}
               />
      </IconButton>
    )

  return (
    <div>
      
    <Card style={{ width: "15rem" }} onMouseOver={e => setShowbutton(true)  } onMouseLeave={e => setShowbutton(false)} className={classes.root}>
        <CardContent className={classes.content}>
        {
          showButton ?
        buttonPlay 
        : null
        }
        </CardContent>
        
     <CardFooter>
        <Typography component="h5" variant="h5">
            {title}  
          </Typography>
          <Typography variant="subtitle1" >
          </Typography>
          </CardFooter>
    </Card>
    </div>
  );
}


export default CardMusicPlayer