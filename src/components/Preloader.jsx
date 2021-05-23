import React from 'react'
import preloader from '../img/preloader.gif'
function Preloader() {
    return (
        <>
            <div className="preloader d-none d-md-block">
                <img src={preloader} alt="preloader" width="226" height="203" className="mx-auto" />
            </div>
            <img src={preloader} alt="preloader" width="226" height="203" className="mx-auto d-md-none" />
        </>
    )
}

export default Preloader