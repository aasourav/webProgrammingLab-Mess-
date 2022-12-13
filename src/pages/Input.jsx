import React from 'react'

const Input = ({inputType,labelCSS,inputCSS,labelText,inputChange,placeHolder,Name,val}) => {
  return (
    <div>
        <label className={labelCSS}>{labelText}:</label><br/>
        <input name={Name} value={val} className={inputCSS} placeholder={placeHolder} onChange={inputChange} type={inputType} />
    </div>
  )
}

export default Input