/*eslint-disable*/
import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Billing from "views/Stripe/Billing";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";
import {useGlobalState} from "_utils/CompositionContext";

const useStyles = makeStyles(shoppingCartStyle);

export default function Panier(props) {
  
  const [state, dispatch] = useGlobalState();
  console.log(state.items)
  const classes = useStyles();
  const [priceTotal, setPriceTotal] = useState(0);
  let total = 0;
  useEffect(()=>{
    
  },[state])
  const removeItem =  (index) => {
    let tmpItems = state.items;
    tmpItems.splice(index, 1);
    localStorage.setItem("items",JSON.stringify(tmpItems))
     dispatch({item: tmpItems})
  }
  console.log(state.items)

  const listArticle = () => {
    let list = [];
    console.log(state.items)
    state.items.map((data, key)=> {
      total += data.price;
      list.push([
        <div className={classes.imgContainer} style={{width: 250}}>
          <img src={`https://global-compositions.s3.eu-west-3.amazonaws.com/${data.image}`} alt="..." className={classes.img} />
        </div>,
        <span>
          <small style={{color:"white"}} className={classes.tdName}>
            {data.title}
          </small>
          <br />
          {/* <small className={classes.tdNameSmall}>by Dolce&amp;Gabbana</small> */}
        </span>,
        <span>
          <small className={classes.tdNumber} style={{color: "white"}}>{data.price} €</small> 
        </span>,
        <Tooltip
          id="close1"
          title="Remove item"
          placement="left"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button link className={classes.actionButton} onClick={() => removeItem(key)}>
            <Close />
          </Button>
        </Tooltip>
      ]);
    });
    list.push({
      purchase: true,
      colspan: "1",
      amount: (
        <span style={{color:"white"}}>
          {total} €
        </span>
      ),
      col: {
        colspan: 1,
        text: (
          <Billing/>
        )
      }
    });
    return list;
  }

  return (
    <div>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "dark"
        }}
      />

      <Parallax
        image={require("assets/img/examples/bg2.jpg")}
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
              <h2 className={classes.title}>Shopping Page</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain >
            <CardBody plain >
              <h3 className={classes.cardTitle} style={{color: "white"}}>Panier</h3>
              { state.items.length > 0 ?      
             <Table
             style={{color: "white", display: "flex"}}
             tableData={listArticle()}
              />
              
              : <h3 style={{color:"white"}}>Pas de produit dans le panier</h3>}
              
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://blog.creative-tim.com/?ref=mkpr-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-shopping-cart"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
