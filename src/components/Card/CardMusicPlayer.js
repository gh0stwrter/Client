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
import MusicContext from "_utils/CompositionContext";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom";


const CardMusicPlayer = ({data:{title, image, composer, file, price,id}, lastChild,show} ) => {
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
      textAlign: "center",
      marginTop: "10%", 
     
    },
   
    controls: {
     },
    background:{
      borderRadius: "4%",
      backgroundImage:`url(https://global-compositions.s3.eu-west-3.amazonaws.com/${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      height:"100%",
    },

    playIcon: {
      background:"black",
      color:"white",
      position: "relative",
      top: "50%",
      display: "flex",
      justifContent: "center",
      "&:hover": {
      transform: 'scale(1.1)',
    },
      border: "solid white 1px",
      borderRadius: "50%",
      height: 68,
      width: 68,
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
    //     localStorage.setItem('musicUrl', file);
    //     client.writeData({data:{
    //           play:{
    //             __typename:"Play",
    //             url: file, 
    //             show: true
    //           },
    //       }});
    //  //await lastChild(true)
    return MusicContext({value:file})

    

  }
const pause = () =>{
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
      <div>
    <Card  product plain style={{ width: "270px" }} 
    onMouseOver={e => setShowbutton(true)} 
    onMouseLeave={e => setShowbutton(false)} 
    className={classes.root}>
      {
        show === "price" ?
        <Button style={{width: "35%" ,textAlign: "center"}} round size="sm">{price} € <br/>
        <AddShoppingCartIcon/></Button> : null
      }
      
      <div className={classes.background}>
       
        <CardBody  className={classes.content}>
        {
          showButton ?
        buttonPlay 
        : null
        }
        </CardBody>
        
          </div>
          
    </Card>
    {/* <Returning/>     */}
         
      <GridContainer>
        
        <GridItem style={{color:"white", textAlign: "left"}} sm={12} md={12}>
    <Typography  color="secondary"  component="h6" variant="h6">

        <Link style={{color:"white", textDecoration:"underline"}}>{title}</Link>
        </Typography>

        </GridItem>
        
      </GridContainer>
        
          </div>
  );
}


export default CardMusicPlayer