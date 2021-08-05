import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Privacy from './components/pages/Privacy/Privacy'

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-204236699-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


const App = () => {

  

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Privacy' component={Privacy} />
      </Switch>
      <Footer />
      
    </Router>
  );
}

export default App;