import React from 'react'
import './Alert.css'
export default function Alert(props) {
    let {
        className='',
        text='Alert',
        severity='',
        backgroundColor=''
    }=props

    severity=severity.toLocaleLowerCase();
    
    const styleProps = {
        backgroundColor:backgroundColor
    }

    switch(severity){
        case 'warning':
            return (
                <div className={severity} style={styleProps}>
                    <span>{text}</span>
                </div>
            )
        case 'info':
            return (
                <div className={severity} style={styleProps}>
                    <span>{text}</span>
                </div>
            )
        case 'success':
            return (
                <div className={severity} style={styleProps}>
                    <span>{text}</span>
                </div>
            )
        case 'error':
            return (
                <div className={severity} style={styleProps}>
                    <span>{text}</span>
                </div>
            )
        default: 
        return (
            <div className={className}>
                <span>{text}</span>
            </div>
          )
    }
}

// The severity prop accepts four values representing different states—success (the default), info, warning, and error–with corresponding icon and color combinations for each: