import React, {Comp} from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Connexion from './pages/Connection/Connection.jsx';
import inscription from './pages/Inscription/Inscription.jsx';
import Navbar from './layouts/Navbars/Navbar.jsx';
const  App  =(props)  => {
  return (
    <Router>
      <Navbar/>
      <div className="App">

      
      <Route path="/" exact component={Home}/>
      <Route path="/connexion" component={Connexion}/>
      <Route  path="/inscription" component={inscription}/>
      </div>
    </Router>
  );
}
export default App;

