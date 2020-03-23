import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from 'components/Card/Card';
import {STREAM_MUSIC,DATA_PLAYER}from "apollo/composition";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledOutlined from '@material-ui/icons/PauseCircleOutline';
import {useQuery, useMutation, useApolloClient} from "@apollo/react-hooks";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardBody from './CardBody';
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import Button from "components/CustomButtons/Button.js";
import MusicContext from "_utils/CompositionContext";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom";
import Player from "components/Player/Player";
import { useHistory } from "react-router-dom";
import {useGlobalState} from "_utils/CompositionContext";
const CardMusicPlayer = ({data:{title, image, composer, file, price,id}, lastChild,show} ) => {
  let history = useHistory()
  const useStyles = makeStyles(theme => ({
    styles,
    root: { 
      height: "200px",
        color: "white",
        display: 'flex',
    },
    
    content: {
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
      zIndex: 2,
      "&:hover": {
      transform: 'scale(1.1)',
    },
      border: "solid white 1px",
      borderRadius: "50%",
      height: 68,
      width: 68,
    },
  }));
  const [state, dispatch] = useGlobalState();
  const [showButton, setShowbutton] = useState(false);
  const [idPlayed, setIdPlayed] = useState(null)
  const [imageComposition, setImageComposition]= useState(null)
  const client = useApolloClient();
  
  const classes = useStyles();
  useEffect(()=>{
    localStorage.setItem("items", state.items)
    setImageComposition(image)
  },[imageComposition,showButton, history,state])

  const addToShoppingCart = () =>{
    const itemsCardAdd = {
      title,
      image,
      price,
      id,

    }

   if( state.items.length > 0) {
    const  matchIdCart = state.items.map(x => x.id).indexOf(id)
    if(matchIdCart === -1){
      dispatch({items: [...state.items, itemsCardAdd]})

    }else{
      return null;
    }
  }else{
    dispatch({items: [...state.items, itemsCardAdd]})
    localStorage.setItem("items", state.items)

  }
  }

  const plays =  async() => {
    dispatch({bool: true, play: true,musicPlayed:{
      _id: id,
      music: file,
      title: title,
      image: image
    }})
    
    //  //await lastChild(true)
  

  }
const pause = (e) =>{
  e.preventDefault()
  dispatch({play:false})
}

  const buttonPlay = 
 state && state.musicPlayed._id === id && state.play === true ? (
      <IconButton onClick={pause} aria-label="play/pause" >
        <PauseCircleFilledOutlined 
        color="primary" 
        className={classes.playIcon}
         />
      </IconButton> ) : (
      <IconButton onClick={ e => {
        e.preventDefault()
        plays()
      }} aria-label="play/pause" >
              <PlayArrowIcon 
              color="primary" 
              className={classes.playIcon}
               />
      </IconButton>
    )


  return (
      <div>
    <Card  product  style={{ width: "230px", background: "#333436" }} 
    onMouseOver={e => setShowbutton(true)} 
    onMouseLeave={e => setShowbutton(false)} 
    className={classes.root}>
      {
        show === "price" ?
        <Button onClick={(e) => {
          e.preventDefault()
          addToShoppingCart()}} style={{width: "55%" ,textAlign: "center",background: "black"}} round size="sm"> {price} € <br/>
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