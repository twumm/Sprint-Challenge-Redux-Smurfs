import React from 'react'

export default function Smurf(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.age}</p>
      <h4>{props.height}</h4>
    </div>
  )
}
