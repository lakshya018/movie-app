import React, {useState} from 'react'
import MovieContext from './MovieContext';

const MovieState = (props) => {

    
    const [movies, setMovies] = useState([]);


    //Function to get movies when we search any movie
    const getMovies = async (search) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6a055d1774d93369d539edc4ef7f9089&query=${search}`);
        const json = await res.json();

        setMovies(json.results);   
    }

    return (
        
        <MovieContext.Provider value={{ movies, getMovies }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState;