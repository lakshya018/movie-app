import React, { useContext, useEffect, useState } from 'react'
import logo from '../../insynk logo.png';
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

    return (

        // ---- Navbar -----
        <div className='container'>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='search'>
                    <input type="search" className="search-bar" onChange={handleChange} onKeyDown={handleKeyPress} placeholder='Search and press Enter' />
                </div>
            </nav>

            <hr />
        </div>


    )
}

export default Navbar
