import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2'
            tiltMaxAngleX={55}
            tiltMaxAngleY={55}>
              <div className='Tilt-inner pa3'>
                 <img className='bimg' alt='logo' src={brain}/>
              </div>
            </Tilt>

        </div>
    )
}

export default Logo;