import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick = {() => props.greetHandler('This is a greeting call from "childComponent file"') }>Greet Parent</button>
  )
}

export default ChildComponent