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

export default function TopTenWeek({compositions: getCompositions, methodPlayer}) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
       
        <div className={classes.features}>
          <h2 style={{color:"white", textAlign:"left"}}>Top 10 de la semaine</h2>
          <hr
          style={{
            // color: "white",
            backgroundColor: "rgba(255,255,255, 0.4)",
            height: "0.1px"
          }}
          />
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
