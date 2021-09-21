// This file is used for rendering everything the app needs and accesses. 

import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import NavBar from '../components/NavBar'; 
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Results from '../components/Results';

import Home from './Home';
import Movies from './Movies';
  

import '../App.css';

const App = () => {

  return (
    <div id="app" > 
    
     <SearchBar />
     <NavBar />
      

      <Switch> 
        <Route exact path="/"> 
          <Home />
        </Route>
        
        <Route exact path="/movies"> 
          <Movies />
        </Route>

        <Route exact path="/results"> 
          <Results />
        </Route>

      </Switch>

      <Footer />
      
    </div >
  );
}

export default App;