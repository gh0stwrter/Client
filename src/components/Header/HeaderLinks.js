/* eslint-disable */
import React, {useState, useEffect} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";
import Cookies from "js-cookie";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import { Redirect } from "react-router-dom";
import Person from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import GlobalModal from "components/LoginModal/GlobalModal.js"
import {useGlobalState} from "_utils/CompositionContext"
import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [redirect, setRedirect] = useState(null);
  const [state, dispatch] = useGlobalState();
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const { dropdownHoverColor } = props;
  const classes = useStyles();

  const loginButton = Cookies.get("x-token") ?
  <>
  <ListItem className={classes.listItem}>
    <Link
      to="/profile/page"
      className={classes.navLink}
      onClick={e => smoothScroll(e, "headers")}
    >
      <Person/>
    </Link>
  </ListItem>
  
  <ListItem className={classes.listItem}>
    <Button
    color="transparent"
    target="_blank"
    className={classes.navButton}
    round
    onClick={() => {
      Cookies.remove("x-token"); 
      setRedirect("/");
    }}>Déconnection</Button> </ListItem></> : 
    <GlobalModal/>;


    const redirectComp = () => {
      if (redirect)
          return <Redirect to={"/profile/dashboard"} />
      else
          return <></>; 

  }
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      {redirectComp()}
      <ListItem className={classes.listItem}>
        <Link to="/ecommerce-page" className={classes.navLink}>
          Shop
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link
        to="/panier"
        className={classes.navLink}
        onClick={e => smoothScroll(e, "headers")}
      >
        <ShoppingCart/> {state.items.length}
      </Link>
      </ListItem>
          {loginButton}
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
