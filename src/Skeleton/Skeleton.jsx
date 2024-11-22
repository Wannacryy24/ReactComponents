import React from 'react'
import './Skeleton.css'

export default function Skeleton(props) {

    const {
        variant,
        height='100',
        width='100',
        className
    }=props
    
    const styleProp = {
        height:height,
        width:width
    }
    
    console.log(height,width);
    
    switch(variant){
        case 'circle' : 
            return (
                <div 
                    className={`skeleton skeleton-circle${className}`}
                    style={styleProp}>
                </div>
            )
        case 'rect' : 
            return (
                <div 
                    className={`skeleton skeleton-rect ${className}`}
                    style={styleProp}>
                </div>
            )
        case 'rounded' : 
            return(
                <div 
                    className={`skeleton skeleton-rounded ${className}`} 
                    style={styleProp}>
                </div>
            )
        case 'text' :
            default :
            return (
                <div 
                    className={`skeleton skeleton-text ${className}`} 
                    style={styleProp}>
                </div>
            )
    }
}


{/* The component supports 4 shape variants:
        text (default): represents a single line of text (you can adjust the height via font size).
        circular, rectangular, and rounded: come with different border radius to let you take control of the size.
*/}
