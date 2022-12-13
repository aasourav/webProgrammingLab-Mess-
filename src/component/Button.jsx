import React from 'react'

const Button = ({Event,css,text='Click me'}) => {
  return (
    <div>
        <button onClick={Event} className={css}>{text}</button>
    </div>
  )
}

export default Button