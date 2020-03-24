import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Cached from "@material-ui/icons/Cached";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import CardMusicPlayer from "components/Card/CardMusicPlayer"
import "./section.css";
import Radio from "@material-ui/core/Radio";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles(styles);

export default function SectionProducts({data}) {
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 style={{textAlign:"center", color: "white"}}>Boutique des compositions</h2>
        <GridContainer>
          <GridItem  style={{color:"white", background:"#212121"}} md={3} sm={3}>
            <Card  plain>
              <CardBody  className={classes.cardBodyRefine}>
                <h4 style={{color:"white"}} className={classes.cardTitle + " " + classes.textLeft}>
                  Tout les genres
                  <Tooltip
                    id="tooltip-top"
                    title="Reset Filter"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      link
                      justIcon
                      size="sm"
                      className={classes.pullRight + " " + classes.refineButton}
                    >
                      <Cached />
                    </Button>
                  </Tooltip>
                  <Clearfix />
                </h4>
                
              </CardBody>
              
      <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          control={
            <Radio
              checked={selectedEnabled === "a"}
              onChange={() => setSelectedEnabled("a")}
              value="a"
              name="radio button enabled"
              aria-label="A"
              icon={<FiberManualRecord className={classes.radioUnchecked} />}
              checkedIcon={
                <FiberManualRecord className={classes.radioChecked} />
              }
              classes={{
                checked: classes.radio,
                root: classes.radioRoot
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="First Radio"
        />
      </div>
            </Card>
          </GridItem>
          <GridItem md={9} sm={9}>
            
            <GridContainer>

              { data ? data.getCompositions.map((item)=>
          <GridItem md={4} sm={4}>
            <CardMusicPlayer show="price" data={item}/>
          </GridItem>

          ) : null}

              
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
