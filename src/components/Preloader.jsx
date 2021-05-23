import React from 'react'
import preloader from '../img/preloader.gif'
function Preloader() {
    return (
        <div className="preloader">
            <img src={preloader} className='mx-auto' alt="preloader" width="226" height="203" />
        </div>
    )
}

export default Preloader