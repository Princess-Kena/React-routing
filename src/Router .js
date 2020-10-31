import React from 'react';
import {BrowserRouter as AppRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';



const Router  = () => {
    return (
     <AppRouter>
         <nav>
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/contacts">Contacts</Link>
             <Link to="/services">Services</Link>
         </nav>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />        
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/services" component={Services} />
          <Route  path="/services/:id" component={ServiceDetails} />

         <hr/>
     </AppRouter>
    );
}

export default Router ;
