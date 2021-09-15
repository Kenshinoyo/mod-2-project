import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = (props) => {

    useEffect(() => {
        movieList = async () => {
            try {
                const generateList = axios.get(
                    'http://www.omdbapi.com/?apikey=7724c915'
                )

                console.log(generateList);
                props.setMovieResults(generateList.data);
            }
            catch (error) {
                console.log(error);
            };



        };
    }, );

    //- Create a list of our results
    console.log(props.movieResults)




return (
    <div>
        THIS IS THE MOVIES PAGE
        {console.log(movieList)}
    </div>
);
};

export default Movies