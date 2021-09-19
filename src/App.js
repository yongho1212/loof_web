import React from 'react';
import './App.css';
import Main from './components/pages/Main/Main';
import Appintro from './components/pages/Appintro/Appintro';
import Mission from './components/pages/Mission/Mission';
import Notice from './components/pages/Notice/Notice';
import Contactus from './components/pages/Contactus/Contactus';
import Aboutus from './components/pages/Aboutus/Aboutus';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Privacy from './components/pages/Privacy/Privacy'
import ReactGA from 'react-ga';

ReactGA.initialize("UA-204236699-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {

  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
      <Route path='/' exact component={Main} />
        <Route path='/Appintro' exact component={Appintro} />
        <Route path='/Mission' component={Mission} />
        <Route path='/Contactus' component={Contactus} />
        <Route path='/Aboutus' component={Aboutus} />
        <Route path='/Privacy' component={Privacy} />
        <Route path='/Notice' component={Notice} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;