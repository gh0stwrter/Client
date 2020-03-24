/*eslint-disable*/
import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";
import {useQuery, useMutation} from "@apollo/react-hooks";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionLatestOffers from "views/EcommercePage/Sections/SectionLatestOffers.js";
import SectionProducts from "views/EcommercePage/Sections/SectionProducts.js";
import SectionBlog from "views/EcommercePage/Sections/SectionBlog.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";
import CircularProgress from '@material-ui/core/CircularProgress';

import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";
import {GET_ALL_COMPOSITIONS} from "apollo/composition"
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
import Player from "components/Player/Player"

const useStyles = makeStyles(styles);

export default function EcommercePage(props) {
  const [progress, setProgress] = React.useState(0);

const {data: getCompositions } = useQuery(GET_ALL_COMPOSITIONS, {
  onCompleted(){
    console.log(getCompositions)
  }
})
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  },[]);
  
  
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Ghost Composer"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
      />
      <Parallax
        image={require("assets/img/storeBanner.jpg")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>Ghost-Composer Shop</h1>
                <h4>
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
     
        {/* <SectionLatestOffers  data={getCompositions}/>  */}
        <SectionProducts data={getCompositions}/>
             
       </div>

      


      {/* <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=mkpr-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Presentation
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={e => e.preventDefault()}
                    className={classes.block}
                  >
                    Discover
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={e => e.preventDefault()}
                    className={classes.block}
                  >
                    Payment
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/contact-us?ref=mkpr-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Contact us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-e-ecommerce"
                target="_blank"
                className={classes.aClasses}
              >
                Creative Tim
              </a>{" "}
              All Rights Reserved.
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>About Us</h5>
            <p>
              Creative Tim is a startup that creates design tools that make the
              web development process faster and easier.{" "}
            </p>
            <p>
              We love the web and care deeply for how users interact with a
              digital product. We power businesses and individuals to create
              better looking web projects around the world.{" "}
            </p>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Social Feed</h5>
            <div className={classes.socialFeed}>
              <div>
                <i className="fab fa-twitter" />
                <p>How to handle ethical disagreements with your clients.</p>
              </div>
              <div>
                <i className="fab fa-twitter" />
                <p>The tangible benefits of designing at 1x pixel density.</p>
              </div>
              <div>
                <i className="fab fa-facebook-square" />
                <p>
                  A collection of 25 stunning sites that you can use for
                  inspiration.
                </p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Instagram Feed</h5>
            <div className={classes.galleryFeed}>
              <img
                src={face1}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face2}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face3}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face4}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face5}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face6}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face7}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face8}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
            </div>
          </GridItem>
        </GridContainer>
      </Footer> */}
    </div>
  );
}
