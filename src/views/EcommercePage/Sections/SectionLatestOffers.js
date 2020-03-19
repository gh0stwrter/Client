import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import "./section.css"
// core components
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CircularProgress from '@material-ui/core/CircularProgress';


import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";

import gucci from "assets/img/examples/gucci.jpg";
import tomFord from "assets/img/examples/tom-ford.jpg";
import dolce from "assets/img/examples/dolce.jpg";
import Slider from "react-slick";
import CardMusicPlayer from "components/Card/CardMusicPlayer";
const useStyles = makeStyles(styles);
export default function SectionLatestOffers({data}) {
  const classes = useStyles();
  
  const [parSlide, setPerslide] = useState(3)
  useEffect(()=>{
    
  })
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 style={{color:"white", textAlign:"center"}}>Dernières Compositions</h2>
        <GridContainer>

        <GridItem md={12} sm={12}>
        {!data ?       <CircularProgress  size={70}  /> :

        <Carousel
          arrows 
          rtl 
          arrowRight={<ArrowBackIosIcon style={{fontSize: 35, color:"white"}}/>}
          arrowLeft={<ArrowForwardIosIcon style={{fontSize: 35, color:"white"}}/>}
          slidesPerPage={parSlide}
          arrows
          infinite
          addArrowClickHandler
        >
        
          { data? data.getCompositions.map((item)=>
            <CardMusicPlayer data={item}/>
          ) : null}
        
          </Carousel>
          }
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
