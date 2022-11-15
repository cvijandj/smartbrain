import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit, onHereSubmit}) => {
    return (
        <div>
            <p className='f5 f3-ns'>
                {'This Magic Brain will detect faces in your picture, give it a try, pass link to your picture'}
            </p>
            <p className='f5 f3-ns'>{'This is the '} <span className='b pointer shadow-hover light-blue' onClick={onHereSubmit}> {'example.'}</span></p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                <input className='f4 br2 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                <button
                 className='w-30 grow f4 link ph3 pv2 shadow-1 dib white bg-light-purple'
                 onClick={onButtonSubmit}>
                    Detect
                </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;