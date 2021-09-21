import axios from 'axios'
export const GET_URL_START = 'GET_URL_START'
export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
export const GET_URL_FAIL = 'GET_URL_FAIL'
export const LIST_LOAD = 'LIST_LOAD'
export const LIST_POP = 'LIST_POP'
export const LIST_FAIL = 'LIST_FAIL'


// - List of global functions for the app

const searchFunction = (userInput) => dispatch => {

    dispatch({ type: GET_URL_START })


    axios.get(`http://www.omdbapi.com/?apikey=7724c915&t=${userInput}`)

        .then(response => dispatch({
            payload: response.data,
            type: GET_URL_SUCCESS
        }))
        .catch(err => dispatch({
            payload: err.message,
            type: GET_URL_FAIL
        }))
}

// const fetchResults = (searchQuery) => dispatch => {

//     dispatch({ type: GET_URL_START })


//     axios.get(`http://www.omdbapi.com/?apikey=7724c915&t=${searchQuery}`)

//         .then(response => dispatch({
//             payload: response.data,
//             type: GET_URL_SUCCESS
//         }))
//         .catch(err => dispatch({
//             payload: err.message,
//             type: GET_URL_FAIL
//         }))
// }

export default searchFunction