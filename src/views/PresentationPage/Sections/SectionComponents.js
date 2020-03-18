// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";



const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
           Grid for put Data
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src={macbookImage}
                alt="macbook"
                className={classes.componentsMacbook}
              />
              <img
                src={shoppingCartImage}
                alt="macbook"
                className={classes.shoppingCart}
              />
              <img
                src={shareButtonImage}
                alt="macbook"
                className={classes.shareButton}
              />
              <img
                src={cardImage}
                alt="macbook"
                className={classes.cardImage}
              />
              <img
                src={twitterImage}
                alt="macbook"
                className={classes.twitterImage}
              />
              <img
                src={iconsImage}
                alt="macbook"
                className={classes.iconsImage}
              />
              <img
                src={repostImage}
                alt="macbook"
                className={classes.repostImage}
              />
            </div>
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
