/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import {useQuery, useApolloClient} from "@apollo/react-hooks";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import SectionOverview from "./Sections/SectionOverview";
import {GET_ALL_COMPOSITIONS} from "apollo/composition";
// import Sticky from 'react-sticky-el';

const useStyles = makeStyles(presentationStyle);
export default function PresentationPage({method}) {
const client = useApolloClient();
  const {data: getCompositions } = useQuery(GET_ALL_COMPOSITIONS, {
    onCompleted(){
      console.log(getCompositions)
    }
  })
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div className="scrollarea" style={{overflow: 'scroll'}}>

      <Header
        brand="Ghost-Composer"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
      />
      <Parallax
        image={require("assets/img/bg4.jpg")}
        className={classes.parallax}
      >
      
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                Ghost-Composer 
                {/* <Button  className={classes.proBadge}>vivez de votre art <ArrowRightAltRoundedIcon/> </Button> */}
                </h1>
                <h3 className={classes.title}>
                La plateforme des amateur et professionel de la musique
                </h3>
              </div>
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <SectionDescription methodPlayer={method} compositions={getCompositions} />
      <SectionComponents />
      <SectionPricing />
      <SectionOverview/>
      </div>
     
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation"
                target="_blank"
                className={classes.footerBrand}
              >
              Ghost-Composer              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://dribbble.com/creativetim?ref=creativetim"
                    target="_blank"
                    color="dribbble"
                    justIcon
                    simple
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    
    </div>
  );
}
