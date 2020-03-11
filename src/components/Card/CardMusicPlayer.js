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
import Cookies from "js-cookie";
import {useQuery, useApolloClient} from "@apollo/react-hooks";



const CardMusicPlayer = ({title, image, composer, musicUri, id}) => {
  const useStyles = makeStyles(theme => ({
    root: { 
      height: "210px",
       
        color: "white",
        display: 'flex',
        "&:hover .background": {
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
    background:{
      backgroundImage:`url(https://global-compositions.s3.eu-west-3.amazonaws.com/${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      height:"100%",
      
    },

    playIcon: {
        background:"red",
       position: "relative",
      top: "50%",
      display: "flex",
      justifContent: "center",
      "&:hover": {
      transform: 'scale(1.3)',
  
    },
      border: "solid white 3px",
      borderRadius: "50%",
      height: 78,
      width: 78,
    },
  }));
  
  const [played, setPlayed] = useState(false);
  const [showButton, setShowbutton] = useState(false);
  const [imageComposition, setImageComposition]= useState(null)
  const client = useApolloClient();

  const classes = useStyles();
  useEffect(()=>{
    setImageComposition(image)
  },[imageComposition])
  const play = () => {
        Cookies.set('played', true)
        Cookies.set("song", musicUri)
        Cookies.set('played', true)
        Cookies.set("show", true  )
        setPlayed(true)
        client.writeData({data:{
              play:{
                __typename:"Play",
                id:1,
                url: musicUri, 
                show: true
              },
          
          }});
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
      <div className={classes.background}>
        {
          showButton ?
        buttonPlay 
        : null
        }
        <CardContent className={classes.content}>

        </CardContent>
        
     <CardFooter>
        <Typography component="h5" variant="h5">
            {title}  
          </Typography>
          <Typography variant="subtitle1" >
          </Typography>
          </CardFooter>
          </div>
    </Card>
    </div>
  );
}


export default CardMusicPlayer