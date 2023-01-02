import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import logo from '../../video-player.png';
import MovieContext from '../context/MovieContext';
import './Navbar.css';

const Navbar = () => {
    const context = useContext(MovieContext);
    const { getMovies } = context;

    const [searchString, setSearchString] = useState("");

    const handleChange = (e) => {
        setSearchString(e.target.value);
        localStorage.setItem("movieToSearch", e.target.value);
    }

    useEffect(() => {
        localStorage.removeItem("movieToSearch");
    }, [])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (searchString.length === 0) {
                alert("Please enter a movie name!");
                return;
            }
            getMovies(searchString);
        }
    }

    const handleClick = () => {
        window.location.reload();
    }

    return (

        // ---- Navbar -----
        <>
        <div className='container'>
            <nav className='navbar'>
                <div>
                    
                        <div className='logo' onClick={handleClick}>
                            <img src={logo}  alt="" />
                            <h1>Movie App</h1>
                        </div>
                    
                    
                    
                </div>

                <div className='search'>
                    <input type="search" className="search-bar" onChange={handleChange} onKeyDown={handleKeyPress} placeholder='Search and press Enter' />
                </div>
            </nav>

            <hr />
        </div>
        <Outlet/>
        </>
        

    )
}

export default Navbar