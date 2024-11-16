import React from 'react'
import './Button.css'
export default function Button({children,className,disabled,color,onClick,variant, height, width, size, onMouseEnter, onMouseLeave,img,src}) {
   
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