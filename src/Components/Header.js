import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import globe_img from '../Assets/imgs/globe150x150.png'
import './Header.css';

function Header(props) {

    const [search, setSearch] = useState('');


    const searchFormSubmit = (e) => {
        e.preventDefault();
        props.getSearch(search);
    }

    return (
        <header>
            <div className="title">
                <Link to="/" >
                    <h1>Know Your W
                        <span>
                            <img src={globe_img} alt="globe" />
                        </span>
                        rld</h1>
                </Link>
            </div>
            <form className='search-box' onSubmit={searchFormSubmit}>
                <div className="input-box">
                    <input type="text" id='search-input' required name='search' value={search} onChange={(e) => { setSearch(e.target.value); props.getSearch(search) }} />
                    <label htmlFor="search-input">Search Your Destination</label>
                    <input type="submit" value="Search" id='search-btn' />
                </div>
            </form>
        </header >
    );
}

export default Header;
