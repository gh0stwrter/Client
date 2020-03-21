import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui icons

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CardMusicPlayer from "components/Card/CardMusicPlayer"
import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription({compositions: getCompositions, methodPlayer}) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
       
        <div className={classes.features}>
          <h2 style={{color:"white"}}>Top 10 of the week</h2>
          <GridContainer container sm={12}>
            {getCompositions ?
              getCompositions.getCompositions.map((item) =>
              <GridItem key={item._id} md={3} sm={3}>
              <CardMusicPlayer lastChild={methodPlayer} data={item}  />
              </GridItem>
              )  : null
          }
           
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
