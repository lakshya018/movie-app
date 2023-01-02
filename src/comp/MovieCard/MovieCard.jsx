import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import './MovieCard.css';

const MovieCard = ({ movie }) => {

    // Movie Poster url
    let imgUrl;
    if(movie.poster_path===null){
        imgUrl = `https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg`;
    }
    else imgUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`;
    
    // State Variable to open and close the modal window
    const [show, setShow] = useState(false);

    return (

        //------ Movie Card -------
        <div>
            <div className="card my-3 mx-4" onClick={() => setShow(true)}>
                <div className="card-body">
                    <div className='rating'><h5>{movie.vote_average}</h5></div>
                    <img src={imgUrl} alt="" className="card-img-top img-fluid" />
                    <h5 className='movie-title'> {movie.title} </h5>
                </div>

            </div>
            <Modal show={show} movie={movie} onClose={() => setShow(false)} />
        </div>



    )
}

export default MovieCard;