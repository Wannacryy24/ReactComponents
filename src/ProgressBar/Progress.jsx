import React from 'react'
import './Progress.css'
export default function Progress({height, width, className, value, backgroundColor,percentage=false}) {
    let fillValue = `${Math.min(Math.max(value,0),100)}%`;

    var styleProp = {
        height: height || '16px',
        width: width? width: '50vw',
    }

    var fillStyle = {
        height:'100%',
        width: fillValue,
        backgroundColor:backgroundColor || 'blue', 
    }

  return (
    <>
        <div
            style={styleProp}
            className={`progress-bar${className || ''}`}
            aria-label='customized-Progress-bar'
        >
            <div 
                style={fillStyle}
                className='progress-bar-fill'
            ></div>
        </div>
        {percentage && <p>{fillValue}</p>}
    </>
  )
}