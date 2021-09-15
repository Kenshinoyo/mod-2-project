import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SearchBar = (props) => {

    useEffect(() => {
        const searchFunction = async () => {
            try {
                const response = await axios.get(
                    `http://www.omdbapi.com/?apikey=7724c915&t=${props.userInput}` //<--HTTP GET request using a concatenation of the "userInput" state
                )

                //- Pass the returned movie results/data into a result variable

                console.log(response);
                props.setMovieResults(response.data);
            }

            catch (error) {
                console.log(error);
            }
        };
        
        // - Conditional statement to trigger async function every time the "userInput" state changes
        if (props.userInput) {          
            helperFunction();
        }
    }, [props.userInput])

    //- Create a list of our results
    console.log(props.movieResults);





        return (
            <div>
                <form className="ui segment"
                    onSubmit={(e) => {
                        // return searchFunction(userInput);
                    }}
                >
                    <div className="ui form">
                        <div className="field">
                            <label>Search: </label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    return props.setUserInput(e.target.value);
                                }}
                                value={props.userInput}
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault()

                                    props.setUserInput(props.userInput)}}> Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    };

export default SearchBar