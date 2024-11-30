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
  border='',
  img,
  src
  } = props;

  const styleProps = {
    backgroundColor:color,
    height:height,
    width:width,
    fontSize:size
  };

  let buttonClass = `${className} ${variant?variant:""} ${color ? `btn-${color}` : ''}`;
  
  switch(variant){
      case 'primary':
      buttonClass += 'btn-primary';  
      styleProps.backgroundColor = color || 'blue';  
      break;
      case 'secondry':
      buttonClass += 'btn-secondry';  
      styleProps.backgroundColor = color || 'yellow';  
      break;
      case 'danger':
      buttonClass += 'btn-danger';  
      styleProps.backgroundColor = color || 'red';  
      break;
      case 'outlet':
      buttonClass += 'btn-primary';  
      styleProps.backgroundColor = color || 'black';  
      break;
      case 'solid':
      buttonClass += 'btn-solid ';  
      styleProps.backgroundColor = color || 'black';  
      break;
      case 'dashed':
      buttonClass += 'btn-solid ';  
      styleProps.border = 'dashed';  
      break;
  }

  
  
  

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