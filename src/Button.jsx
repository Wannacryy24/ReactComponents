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

  const buttonClass = `${className} ${variant?variant:""} ${color ? `btn-${color}` : ''}`;
  
  const styleProps = {
    backgroundColor:color,
    height:height,
    width:width,
    fontSize:size
  };

  return (
    <button
        className={buttonClass}
        disabled={disabled}
        onClick={onClick}
        style={styleProps}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >{children}
        {img && <img src={src} alt="icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />}
    </button>
  )
}

//variant ke acc alag jayega
// type