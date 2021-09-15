import React, { useState } from 'react';
import axios from 'axios';

const Movies = () => {
    
    // - Create a state to store movie results
    const [movieResults, setMovieResults] = useState({});

    const response = axios.get(
        `http://www.omdbapi.com/?apikey=7724c915`
    )

    console.log(response);
    // setMovieResults(response.data);


    return (
        <div>
            THIS IS THE MOVIES PAGE
        </div>
    );
};

export default Movies