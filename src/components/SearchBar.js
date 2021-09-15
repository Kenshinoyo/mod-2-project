import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SearchBar = (props) => {

    useEffect(() => {
        const helperFunction = async () => {
            try {
                const response = await axios.get(
                    `http://www.omdbapi.com/?apikey=7724c915&t=${props.userInput}`
                )

                //- Provide the movie results to our result variable

                console.log(response);
                props.setMovieResults(response.data);
            }

            catch (error) {
                console.log(error);
            }
        };
        if (props.userInput) {
            // - Call async function
            helperFunction();
        }
    }, [props.userInput])

    //- Create a list of our results
    console.log(props.movieResults);





        return (
            <div>
                <form className="ui segment"
                    onSubmit={(e) => {
                        // return helperFunction(userInput);
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