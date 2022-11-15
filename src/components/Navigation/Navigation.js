import React from 'react';
import './Navigation.css'


const Navigation = ({onRouteChange, isSignedIn}) => {
    
        if(isSignedIn) {
            return (
        <nav className='pa1' style={{display: 'flex', justifyContent:'flex-end'}}>
            <div onClick={() => onRouteChange('signout')}
             className='signOutWrapper pointer shadow-3 br2'>
            <p onClick={() => onRouteChange('signout')} className='f5 f3-ns link dim black b black pa2 pointer'>Sign Out</p>
            </div>
        </nav> ) } else {
            return(
            <nav className='pa1' 
            style={{display: 'flex', justifyContent:'flex-end'}}>
                <div onClick={() => onRouteChange('signin')}
             className='signOutWrapper pointer shadow-3'>
            <p onClick={() => onRouteChange('signin')} className='f5 f3-ns link dim black b black pa2 pointer'>Sign In</p>
            </div>
            <div onClick={() => onRouteChange('register')}
             className='signOutWrapper pointer shadow-3'>
            <p onClick={() => onRouteChange('register')} className='f5 f3-ns link dim black b black pa2 pointer'>Register</p>
            </div>
        </nav>)
        }
    
}

export default Navigation;