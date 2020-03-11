import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";
import { ApolloProvider } from '@apollo/react-hooks';
import decode from 'jwt-decode';

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import Player from "components/Player/Player"
import Cookies from "js-cookie";
import {useQuery, useApolloClient} from "@apollo/react-hooks";

import {DATA_PLAYER} from "apollo/uploads.js"
var hist = createBrowserHistory();



const isAllowed = (token) => {
  try {
    const now = new Date(0);
    const decoded = decode(token);
    console.log(decoded.nbf)
    if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
      throw new Error(`token expired: ${JSON.stringify(decoded)}`)
    }
    if (typeof decoded.nbf !== 'undefined' && decoded.nbf > now) {
      throw new Error(`token expired: ${JSON.stringify(decoded)}`)
    }
    now.setUTCSeconds(decoded.exp);
    return now.valueOf() > new Date().valueOf();
  } catch (e) {
    return false;
  }
}

const ProtectedRoute = ({ ...rest }) => {
  const token = Cookies.get('x-token');
  return isAllowed(token)
    ? <Route {...rest} />
    : <Redirect to={"/auth/login"} />;
}

const App = (props) =>{
  const [showPlayer, setShowPlayer] = useState(false)
  const [dataPlayer, setDataPlayer] = useState(null)
  const client = useApolloClient();

  
  
  useEffect(()=>{
    const data  = client.readQuery({query: DATA_PLAYER}) 
    setDataPlayer(data)
    console.log(dataPlayer)
  setShowPlayer(Cookies.get('show') === "true" ? true : false);

},[showPlayer, dataPlayer])
const show_player = (bool) =>{
  return setShowPlayer(bool)
}

  return(
  
  <Router history={hist}>
      { showPlayer  === true  ?   <Player playerMethod={showPlayer} />
 : null }
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/profile" render={props =>
         <Route path="/profile/dashboard" component={Dashboard} /> 
         
         }/>
      
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={PresentationPage} />
    </Switch>
  </Router>
  )
}

export default App;