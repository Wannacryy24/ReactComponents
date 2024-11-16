import React from 'react'
import './Button.css'
export default function Button(props) {
   const {
    children,
    className,
    disabled=false,
    color='',
    onClick,
    variant='',
    height='auto',
    width='auto',
    size='16px',
    onMouseEnter,
    onMouseLeave,
    img,
    src
   } = props;
  const buttonClass = `${className} ${variant?variant:""}`
  
  return (
    <button
        className={buttonClass}
        disabled={disabled}
        onClick={onClick}
        style={
            {backgroundColor:color, height:height, width:width, fontSize:size} 
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >{children}
    </button>
  )
}
//variant ke acc alag jayega
// type