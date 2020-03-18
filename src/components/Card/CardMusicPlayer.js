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
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardBody from './CardBody';
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import CardHeader from "components/Card/CardHeader"
import Tooltip from "@material-ui/core/Tooltip";
import Favorite from "@material-ui/icons/Favorite";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";


const CardMusicPlayer = ({title, image, composer, musicUri, id, lastChild}) => {
  const useStyles = makeStyles(theme => ({
    styles,
    root: { 
      height: "200px",
       
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
  },[imageComposition,showButton])
  const play =  async() => {
        setPlayed(true)
        client.writeData({data:{
              play:{
                __typename:"Play",
                url: musicUri, 
                show: true
              },
          }});
     await lastChild(true)

  }
const pause = () =>{
  setPlayed(false)
}
const Returning =() =>{
  return (
    <Card  onMouseOver={e => setShowbutton(true)} 
    onMouseLeave={e => setShowbutton(false)}  product plain>
        {
          showButton ?
        buttonPlay 
        : null
        }
              <CardHeader className={classes.root} image plain>
                <a href="#pablo">
                  <img style={{width: "60%", height:"70%"}} src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${image}`} alt="..." />
              
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(https://global-compositions.s3.eu-west-3.amazonaws.com/${image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: "no-repeat",
                  height:"100%",
                  opacity: 1 
                }}
                >
             
                </div>
              </CardHeader>
             
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                  {title} 
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
  )
}
  const buttonPlay = 
  played ? (
      <IconButton onClick={pause} aria-label="play/pause" >
        <PauseCircleFilledOutlined 
        color="primary" 
        className={classes.playIcon}
         />
      </IconButton> ) : (
      <IconButton onClick={ e => {
        e.preventDefault()
        play()
      }} aria-label="play/pause" >
              <PlayArrowIcon 
              color="primary" 
              className={classes.playIcon}
               />
      </IconButton>
    )

  return (
    <GridContainer>
      
    <Card product plain style={{ width: "250px" }} 
    onMouseOver={e => setShowbutton(true)} 
    onMouseLeave={e => setShowbutton(false)} 
    className={classes.root}>
      <div className={classes.background}>
       
        <CardBody className={classes.content}>
        {
          showButton ?
        buttonPlay 
        : null
        }
        </CardBody>
        
          </div>
          
    </Card>
    {/* <Returning/>     */}
         
    <Typography color="primary"  component="h6" variant="h6">
            {title}  
          </Typography>
    </GridContainer>
  );
}


export default CardMusicPlayer