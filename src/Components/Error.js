import React from 'react';
import { Link } from 'react-router-dom';
import './Errror.css'

function Error() {
    return (
        <div className='error-box'>
            <h1>Opps ! Looks Like You are in wrong Path !!</h1>
            <Link to="/">Get Back To Home</Link>
        </div>
    );
}

export default Error;
