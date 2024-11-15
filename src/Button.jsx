import React, { Children } from 'react'

export default function Button({Children,className,disabled}) {
  return (
    <button
        className={className}
        disabled={disabled}
        >{Children}
    </button>
  )
}
