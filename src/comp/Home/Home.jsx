import React, { useContext, useEffect, useState } from 'react'
import MovieContext from '../context/MovieContext'
import MovieCard from '../MovieCard/MovieCard';
import './Home.css'
const Home = () => {

    //Used Context for getting movies
    const context = useContext(MovieContext);
    const { movies } = context;

    const [recentMovies, setRecentMovies] = useState([]);

    let searchString = localStorage.getItem('movieToSearch');

    //When the page will load first time it will store the recent movies list in the recentMovies array
    useEffect(() => {
        const getRecentMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6a055d1774d93369d539edc4ef7f9089');
            const json = await response.json();
            setRecentMovies(json.results);
        }

        getRecentMovies();

    }, [])

    return (


        //If the length of the movies array and the search string is empty then return the now playing or recent movies list, 
        //else if we search something and we got no result then return "No Data Found", 
        //else if we search somethinh and we found the data then return that movies data list

        <div className="container moviesList">
            {
                (movies.length === 0 && searchString === null) ?
                    <div>
                        <h2 className='movies-heading'>Most Recent Movies</h2>
                        <div className="recent-movies">
                            {
                                recentMovies.map((movie) => {
                                    return <MovieCard key={movie.id} movie={movie} />
                                })
                            }
                        </div>
                    </div> 
                :
                (movies.length === 0 && searchString.length === 0) ?
                     <div>
                        <h2 className='recent-movies-title'>Most Recent Movies</h2>
                        <div className="recent-movies">
                            {
                                recentMovies.map((movie) => {
                                    return <MovieCard key={movie.id} movie={movie} />
                                })
                            }
                        </div>
                    </div>
                :
                (movies.length === 0 && searchString.length > 0) ?
                        <div className='noResult'><h3>No Data Found</h3></div>
                :
                    <div>
                        <h2 className='movies-heading'>Search Results For: {searchString}</h2>
                        <div className="searched-movies">
                            {
                                movies.map((movie) => {
                                    return <MovieCard key={movie.id} movie={movie} />
                                })
                            }
                        </div>
                    </div>
            }
        </div>


    )
}

export default Home
