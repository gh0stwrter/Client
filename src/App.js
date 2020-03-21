import React, {useState, useEffect} from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";
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
import Player from "components/Player/Player"
import Cookies from "js-cookie";
import {useApolloClient} from "@apollo/react-hooks";
import Stripe from "views/Stripe/Billing.js"
import {useGlobalState} from "_utils/CompositionContext";
import GlobalStateProvider from "_utils/CompositionContext";
var hist = createBrowserHistory();




const isAllowed = (token) => {
  try {
    const now = new Date(0);
    const decoded = decode(token);
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
    : <Redirect to={"/"} />;
}

const PlayerRoutes = ({...rest}) =>{
  return (
    <div>
      <Route {...rest}/>
      <Player/>
      </div>
  )
}
const App = (props) =>{
  const [state, dispatch] = useGlobalState();
  const [showPlayer, setShowPlayer] = useState(false);
  const setBool = React.useCallback(bool => dispatch({bool}), []);

  const clients = useApolloClient();
  useEffect(()=>{
    console.log(state)

  },[state])

  clients.writeData({
    data:{showThePlayer: {__typename:"Method"}}
  })
  return(
<GlobalStateProvider>
<Router history={hist}>
<Player/>
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
<Route path="/product-page" component={ProductPage} />
<Route path="/sections" component={SectionsPage} />
<Route path="/shopping-cart-page" component={ShoppingCartPage} />
<Route path="/signup-page" component={SignupPage} />
<Route path="/payment" component={Stripe} />
      <ProtectedRoute path="/profile" render={props =>
         <Route path="/profile/page" component={ProfilePage} /> 
         }/>
      
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={() => <PresentationPage/>} />
      {/* <Route path="/" component={() => <PresentationPage method={playerShow}/>} /> */}
    </Switch>
  </Router>
  </GlobalStateProvider>
  )
}

export default App;