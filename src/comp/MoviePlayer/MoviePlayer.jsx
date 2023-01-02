import React from 'react'
import { useLocation } from 'react-router-dom'
import "./MoviePlayer.css";

const MoviePlayer = () => {
  const location = useLocation();
  const {movieId} = location.state;
  const url = `https://autoembed.to/movie/tmdb/${movieId}`;

  return (
      <div>
        <iframe src={url} width="100%" height="100%" frameborder="0" className='movieFrame' allowfullscreen title='myFrame'></iframe>
      </div>
      
   
  )
}

export default MoviePlayer