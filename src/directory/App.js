// This file is used for rendering everything the app needs and accesses. 

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import axios from 'axios';

import NavBar from '../components/NavBar'; 
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

import Home from './Home';
import Movies from './Movies'; 

import '../App.css';

const App = () => {
  
  // - Global states for movie data
  const [userInput, setUserInput] = useState("");
  const [movieResults, setMovieResults] = useState({});

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

      </Switch>

      <Footer />
    </div >
  );
}

export default App;