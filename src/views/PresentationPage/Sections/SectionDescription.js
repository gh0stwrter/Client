import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CardMusicPlayer from "components/Card/CardMusicPlayer"
import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
       
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <CardMusicPlayer/>
            </GridItem>
            <GridItem md={4} sm={4}>
            <CardMusicPlayer/>
            </GridItem>
            <GridItem md={4} sm={4}>
            <CardMusicPlayer/>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
