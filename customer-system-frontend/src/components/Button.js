import React from 'react'

const Button = ({disabled,text,onClick,blue}) => {
  return (
    <div className={blue ? "btn btn-blue":"btn"} onClick={onClick} disabled={disabled}>
      {text}
    </div>
  )
}

export default Button
