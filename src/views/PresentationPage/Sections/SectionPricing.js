import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/presentationSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <div className={classes.socialLine}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem md={12}>
                  <h4 className={classes.title}>Thank you for sharing!</h4>
                  <Button color="twitter" href="#pablo" round>
                    <i className={"fab fa-twitter " + classes.marginRight} />
                    Twitter
                  </Button>
                  <Button color="facebook" href="#pablo" round>
                    <i className={"fab fa-facebook " + classes.marginRight} />
                    Facebook
                  </Button>
                  <Button color="google" href="#pablo" round>
                    <i className={"fab fa-google " + classes.marginRight} />
                    Google
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}
