import React from 'react'
import './Modal.css';
import { Link } from 'react-router-dom';

const Modal = ({show ,movie,  onClose}) => {

    //If the show varible is false then we do not need to show the modal
    if(!show) return null;
  
    // Movie Poster url
    let imgUrl;
    if(movie.poster_path===null){
        imgUrl = `https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg`;
    }
    else imgUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`;

    //Months Array
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

    //Release Date
    const release = movie.release_date;
    const releaseDate = months[Number(release.substr(5,2))-1] + " " + release.substr(8,2) + ", " + release.substr(0,4);

    return (

        //------ Modal Window ------
        <div className='wrapper'> 
            <div className='modal-content'>
                <div className="movietitle">
                    <h3>{movie.title}</h3>
                </div>
                <div className="movieDetails">
                    <div className="movieImg">
                        <img src={imgUrl} className='poster' alt="" />
                    </div>
                    <div className='movieDescription'>
                            <p><b>Release Date:</b> {releaseDate}</p>
                            <p>{movie.overview}</p>
                            <p><b>{movie.vote_average}</b>/10  ({movie.vote_count} Total Votes)</p>
                            <Link to={'/moviePlayer'} state={{ movieId : movie.id }}><button className='watchBtn'>Watch Movie</button></Link>
                            
                    </div>
                    
                </div>
                <button className='btnClose' onClick={onClose}>&times;</button>
            </div>
        </div>
)
}

export default Modal;