import React from 'react'
import './Skeleton.css'

export default function Skeleton(props) {

    const {
        variant='text',
        height='100px',
        width='100px',
        className='',
        duration='3s'
    } = props
    
    const styleProp = {
        height:height,
        width:width,
        animationDuration: duration
    }
    

    switch(variant){
        case 'circle' : 
            return (
                <div 
                    className={`skeleton skeleton-${variant} ${className}`}
                    style={styleProp}>
                </div>
            )
        case 'rect' : 
            return (
                <div 
                    className={`skeleton skeleton-${variant} ${className}`}
                    style={styleProp}>
                </div>
            )
        case 'rounded' : 
            return(
                <div 
                    className={`skeleton skeleton-${variant} ${className}`} 
                    style={styleProp}>
                </div>
            )
        case 'text' :
            default :
            return (
                <div 
                    className={`skeleton skeleton-${variant} ${className}`} 
                    style={styleProp}>
                </div>
            )
    }
}


{/* The component supports 4 shape variants:
        text (default): represents a single line of text (you can adjust the height via font size).
        circular, rectangular, and rounded: come with different border radius to let you take control of the size.
*/}
