import React from 'react'

export default function Image({src, alt, className, height, width}) {
    const onClick = () => {
        console.log('inage Clicked');
    }
  return (
    <img    
        src={src} 
        alt={alt} 
        className={className} 
        onClick={onClick}
        height={height}
        width={width}
    />
  )
}
