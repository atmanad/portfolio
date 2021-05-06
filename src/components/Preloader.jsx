import React from 'react'
import preloader from '../img/preloader.gif'
function Preloader() {
    return (
        <img src={preloader} className='mx-auto img-fluid' alt="preloader" width="226" height="226" />
    )
}

export default Preloader