import React from 'react'

function Button(props) {
  return (
    <div className='button' style={{background:props.back,color:props.col}}>
        {props.content}
    </div>
  )
}

export default Button