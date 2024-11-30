import React from 'react'
import './Progress.css'
export default function Progress(props) {
    let {   height,
            width,
            className,
            value,
            backgroundColor,
            percentage=false,
            variant='linear',
            radius=49,
            cx=50,
            cy=50,
            stroke='black',
            strokeWidth=5
        } = props;

    let fillValue = `${Math.min(Math.max(value,0),100)}%`;
    let clampedValue = Math.min(Math.max(value, 0), 100);

    let circumference = 2 * Math.PI*radius;
    console.log(circumference);
    
    const strokeDashoffset = circumference - (circumference * value) / 100;

    var styleProp = {
        height: height || '16px',
        width: width? width: '50vw',
    }

    var fillStyle = {
        height:'100%',
        width: fillValue,
        backgroundColor:fillValue=='100%' ? 'green' : backgroundColor || 'blue', 
    }

  return (
    <>
        {
            variant === 'linear' ? 
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
            :
            (
                <svg 
                width={2 * radius} 
                height={2 * radius} 
                viewBox={`0 0 ${2 * radius} ${2 * radius}`}  
                style={{ display: 'block', margin: '0 auto' }}     
                >
                    <circle 
                        cx={cx} 
                        cy={cy} 
                        r={radius}
                        fill={'transparent'}
                        stroke={stroke} 
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset} //it shows progress of stroke  
                        // style={{border:'2px solid black'}} 
                    />
                </svg>
            )
        }
    </>)
}