import React from 'react'

const Slider = ({children}) => {
    return (
        <div className='Slider'>
            <div className='Slide'>
                {children}
            </div>
        </div>
    )
}

export default Slider
