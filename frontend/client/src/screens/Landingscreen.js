import React from 'react'
import { Link } from 'react-router-dom';

function Landingscreen() {
    return (
        <div className='row landing justify-content-center'>
            <div className="col-md-9 my-auto text-center" >
                <h2 style={{ color: 'white', fontSize: '120px' }}>WanderStay</h2>
                <h1 style={{ color: 'white' }}>"Designed and Developed By Om"</h1>
                <Link to='/home'>
                    <button className='btn landing-btn'>Get Started</button>
                </Link>
            </div>
        </div>
    )

}

export default Landingscreen;
