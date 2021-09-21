// import React, { useEffect } from 'react';
// import searchFunction from '../Actions';
// import { connect } from 'react-redux';


// const mapStateToProps = (state) => {
//     return { movieResults: state.resultsReducer.movieResults }

// }

// const Results = (props) => {

//     // const [searchResult, setSearchResult] = useState("");

//     // - Conditional statement to trigger async function every time the "userInput" state changes
//     useEffect(() => { props.searchFunction(props.searchQuery) }, [props.searchQuery])

//     //- Create a list of our results
//     console.log(props.movieResults);





//     return (
//         <div>
            
//             { props.searchQuery.payload }

//         </div>
//     )
// };

// export default connect(mapStateToProps, { searchFunction })(Results);